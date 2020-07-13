import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  FlatList
} from "react-native";
import Colors from "../constants/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Card from "../components/card";
import { Ionicons } from "@expo/vector-icons";

const randomNumberBetweenGenerate = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return (randomNumberBetweenGenerate = (min, max, exclude));
  } else {
    return randomNum;
  }
};

const GameScreen = props => {
  const iniatialGuess = randomNumberBetweenGenerate(1, 100, props.usersChoice);
  const [currentGuess, setCurrentGuess] = useState(iniatialGuess);
  const [rounds, setrounds] = useState(0);
  const [roundsArray, setroundsArray] = useState([iniatialGuess]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  var content;

  useEffect(() => {
    if (currentGuess === props.usersChoice) {
      props.gameOverHandler(rounds);
    }
  }, [currentGuess, props.gameOverHandler, props.usersChoice]);

  const nextGuessHandle = dirn => {
    if (
      (dirn === "lower" && currentGuess < props.usersChoice) ||
      (dirn === "greater" && currentGuess > props.usersChoice)
    ) {
      Alert.alert("Hey dude!!", "This is wrong dude....", [
        { text: "Sorry!!", style: "cancel" }
      ]);
      return;
    }
    if (dirn === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }

    const nxtNo = randomNumberBetweenGenerate(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nxtNo);
    setrounds(rds => rds + 1);
    setroundsArray(rounds => {
      return [nxtNo, ...rounds];
    });
    console.log(rounds);
    console.log(currentGuess);
    console.log(roundsArray);
    console.log(props.usersChoice);
  };

  return (
    <View style={styles.screen}>
      {/* <Text>Oponents Guess</Text> */}
      <Card
        style={{
          padding: 10,
          marginTop: 10,
          alignItems: "center",
          width: wp("80%"),
          marginBottom: 13
        }}
      >
        <Text style={{ color: "#666563" }}>Oponents Guess</Text>
        <Text
          style={{
            borderWidth: 1,
            borderColor: Colors.primaryColor,
            borderRadius: 12,
            padding: 8,
            width: 40,
            textAlign: "center",
            marginTop: 7
          }}
        >
          {currentGuess}
        </Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={nextGuessHandle.bind(this, "lower")}>
            <Text style={styles.btnInBtnGroup}>
              <Ionicons name="md-remove" size={25} color="white" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={nextGuessHandle.bind(this, "greater")}>
            <Text style={styles.btnInBtnGroup}>
              <Ionicons name="md-add" size={25} color="white" />
            </Text>
          </TouchableOpacity>
        </View>
      </Card>

      <FlatList
        style={{ marginBottom: 5, flex: 1, elevation: 0.3 }}
        data={roundsArray}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => (
          <View style={styles.listItme}>
            <Text style={styles.listItmeText}>{item}</Text>
          </View>
        )}
      />

      {/* <ScrollView>
        {roundsArray.map(round => {
          <View>
            <Text>{round}</Text>
            <Text>gdfgdf</Text>
          </View>;
        })}
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonGroup: {
    flexDirection: "row",
    margin: 12,
    alignItems: "center",
    justifyContent: "space-between"
  },
  btnInBtnGroup: {
    textAlign: "center",
    width: wp("20%"),
    backgroundColor: Colors.primaryColor,
    color: Colors.accentColor,
    borderColor: Colors.accentColor,
    borderWidth: 2,
    borderRadius: 7,
    padding: 2,
    marginTop: 4,
    marginHorizontal: wp("3%")
  },
  listItme: {
    flex: 1,

    flexDirection: "column-reverse",
    justifyContent: "flex-end",
    width: wp("80%"),
    height: hp("6%"),
    alignItems: "center",
    marginVertical: 6,
    padding: 4,
    borderWidth: 2,
    borderColor: Colors.primaryColor,
    borderRadius: 7
  },
  listItmeText: {
    fontSize: 20,
    color: "#666563"
  }
});

export default GameScreen;
