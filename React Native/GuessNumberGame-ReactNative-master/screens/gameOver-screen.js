import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Button,
  Image,
  ScrollView
} from "react-native";
import Colors from "../constants/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Card from "../components/card";

const GameOver = ({ noRounds, userNumber, restartGameHandler }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.gameOver}>Game is over</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.images}
          resizeMode="cover"
          source={require("../assets/success.png")}
        />
      </View>
      <View style={styles.resultss}>
        <Text style={styles.results}>No of rounds : {noRounds}</Text>
        <Text style={styles.results}>Number was : {userNumber}</Text>
      </View>
      <Button
        color={Colors.accentColor}
        title="New Game"
        onPress={restartGameHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  images: {
    height: "100%",
    width: "100%"
    // borderRadius: 130
  },
  imageContainer: {
    width: "80%",
    height: "50%",
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primaryColor,
    overflow: "hidden"
  },
  gameOver: {
    paddingBottom: hp("5%"),
    fontSize: 28,
    color: Colors.primaryColor
  },
  results: {
    fontSize: 17,
    marginTop: 5,
    color: "#666563"
  },
  resultss: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: hp("3.5%")
  }
});

export default GameOver;
