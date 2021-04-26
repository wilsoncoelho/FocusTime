import React, { useState } from "react";
import { StyleSheet, Text, View, Vibration, Platform } from "react-native";
import { colors } from "../../utils/colors";
import { spacing } from "../../utils/sizes";
import { Countdown } from "../../components/Countdown";
import { RoundButton } from "../../components/RoundButton";
import { ProgressBar } from "react-native-paper";
import Timing from "../../features/timer/Timing";
import { useKeepAwake } from "expo-keep-awake";

const DEFAULT_TIME = 0.1;

const timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  const vibrate = () => {
    if(Platform.OS === 'ios')  
    {
      const interval = setInterval(() => {
        Vibration.vibrate(),1000
      })
      setTimeout(() => {
        clearInterval(interval)
      }, 10000);
  
    } else{
      Vibration.vibrate(10000)
    }
  }

  const onEnd = () => {
    vibrate()
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd()

  };
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={{ padding: 10 }}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>

        <View style={{ paddingTop: spacing.xxl }}>
          <ProgressBar
            progress={progress}
            color="#5e84e2"
            style={{ height: 10 }}
          />

          <View style={styles.buttonWrapper}>
            <Timing onChangeTime={changeTime} />
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          {isStarted ? (
            <RoundButton
              title="Pause"
              onPress={() => {
                setIsStarted(false);
              }}
            />
          ) : (
            <RoundButton
              title="Start"
              onPress={() => {
                setIsStarted(true);
              }}
            />
          )}
        </View>

        <View style={styles.clearSubject}>
        <RoundButton
              title="-"
              size={50}
              onPress={() => clearSubject()}
            />
        </View>
      </View>
    </View>
  );
};

export default timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: "center",
  },
  task: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
    textAlign: "center",
  },
  countdown: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.1,
    flexDirection: "row",
    paddingVertical: 60, //15
    justifyContent: "center",
    alignItems: "center",
  },
  clearSubject:{
    paddingLeft:25,
    paddingTop:25
  }
});
