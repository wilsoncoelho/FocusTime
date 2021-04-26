import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { RoundButton } from "../../components/RoundButton";
import { colors } from "../../utils/colors";
import { fontSizes, spacing } from "../../utils/sizes";
// import { spacing, fontSizes } from "../../utils/sizes";
// import { RoundButton } from "../../components/RoundButton";

const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  const HistoryItem = ({ item, index }) => {
    return <Text style={styles.historyItem(item.status)}>{item.subject} </Text>;
  };
  return (
    <>
      <SafeAreaView style={{ flex: 1 , alignItems:'center'}}>
        <Text style={styles.title}>Things we've focused on</Text>
        {!!focusHistory.length && (
         <>
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ flex: 1, alignItem: "center" }}
            data={focusHistory}
            renderItem={HistoryItem}
            keyExtractor={(item)=> item.key}
          />

         </>
        )}
      </SafeAreaView>
      <View style={styles.clearContainer}>
          <RoundButton title='clear' size={75} onPress={() => {
              onClear()
          }}/>
      </View>
    </>
  );
};

export default FocusHistory;

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? "red" : "green",
    fontSize: fontSizes.md,
  }),
  title:{
      color:colors.white,
      fontSize:fontSizes.lg
  },
  clearContainer:{
      padding:spacing.md,
      alignItems:'center'
  }
});
