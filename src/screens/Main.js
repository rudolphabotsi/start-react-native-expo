import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const darkMode = useSelector((state) => state.darkModeReducer);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Test</Text>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
