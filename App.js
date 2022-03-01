import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "react-native-elements";
import { Provider as ReduxProvider } from "react-redux";
import THEME from "./src/constants/theme";
import Main from "./src/screens/Main";
import configureStore from "./src/store/configureStore";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    "FontCustom": require("./assets/fonts/FontCustom.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={THEME}>
      <ReduxProvider store={configureStore}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Main />
        </View>
      </ReduxProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
