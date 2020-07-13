import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/home";
import { AppLoading } from "expo";
import Navigator from "./routes/drawer";

const getFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf")
  });
};

export default function App() {
  const [fontsLoaded, setfontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setfontsLoaded(true)} />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',

//   },
// });
