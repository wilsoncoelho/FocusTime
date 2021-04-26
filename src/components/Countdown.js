import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 10, isPaused, onProgress, onEnd }) => {
  const interval = React.useRef(null);

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current);

        return time;
      }

      const timeLeft = time - 1000;

      return timeLeft;
    });
  };

  const [millis, setMillis] = useState(minutesToMillis(minutes));
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
    if (millis === 0) onEnd();
  }, [millis]);

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
    return () => {
      setMillis();
    };
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (interval.cuurrent) cleartInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, [isPaused]);

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: "bold",
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: "rgba(94, 312, 226,0.3)",
  },
});
