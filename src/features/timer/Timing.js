import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RoundButton } from "../../components/RoundButton";
import { spacing } from "../../utils/sizes";

const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.timingButton}>
      <RoundButton size={50} title="10" onPress={() => {
          onChangeTime(10)
      }}/>
      <RoundButton size={50} title="15" onPress={() => {
          onChangeTime(15)
      }}/>
        <RoundButton size={50} title="20" onPress={() => {
          onChangeTime(20)
      }}/>
    </View>
  );
};

export default Timing;

const styles = StyleSheet.create({
  timingButton: {
    
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: spacing.lg,
  },
});
