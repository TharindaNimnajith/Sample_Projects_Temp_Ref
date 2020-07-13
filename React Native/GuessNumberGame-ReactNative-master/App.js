import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import StartGameScreen from "./screens/start-game-screen";
import GameScreen from "./screens/game-screen";
import GameOver from "./screens/gameOver-screen";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [userNumber, setuserNumber] = useState();
  const [noRounds, setnoRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  const restartGameHandler = () => {
    setuserNumber(null);
    setnoRounds(0);
  };

  const startGameHandler = selectedNumber => {
    setuserNumber(selectedNumber);
    setnoRounds(0);
  };

  const gameOverHandler = noOfRounds => {
    setnoRounds(noOfRounds);
  };

  let content = <StartGameScreen startGameHandler={startGameHandler} />;

  if (userNumber && noRounds <= 0) {
    content = (
      <GameScreen usersChoice={userNumber} gameOverHandler={gameOverHandler} />
    );
  } else if (noRounds) {
    content = (
      <GameOver
        noRounds={noRounds}
        userNumber={userNumber}
        restartGameHandler={restartGameHandler}
      />
    );
  }

  return (
    <View style={styles.appHome}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  appHome: {
    flex: 1
  }
});
