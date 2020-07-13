import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/categories-screen";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealsNavigator from "./navigation/meals-navigator";
import { createStore, combineReducers } from "redux";
import mealsReducer from "./store/meals-reducer";
import { Provider } from "react-redux";

const getFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const mainReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(mainReducer);

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontLoaded(true)} />
    );
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
