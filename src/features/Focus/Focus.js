import React, { useState } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundButton } from "../../components/RoundButton";
import { colors } from "../../utils/colors";
import {fontSizes, spacing} from '../../utils/sizes'

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            label={"Focus task"}
            style={{ flex: 1, marginRight: 20 }}
            // onSubmitEditing={({ nativeEvent }) => {
            //   setTmpItem(nativeEvent.text);
            // }}

            onChangeText={(text)=>setSubject(text)}
            blurOnSubmit={true}
          />
          <RoundButton
            size={50}
            title="+"
            onPress={() => {
              addSubject(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 0.5,
    padding: 0, //spacing.md
    justifyContent: "center",
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    fontWeight: "bold",
  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
