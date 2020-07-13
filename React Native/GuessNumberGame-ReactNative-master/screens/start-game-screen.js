import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Card from "../components/card";
import Colors from "../constants/colors";
import InputField from "../components/input";

const StartGameScreen = props => {
  const [inputValue, setinputValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNum, setSelectedNum] = useState();

  const inputHandler = value => {
    setinputValue(value.replace(/[^0-9]/g, ""));
  };

  const resetFunc = () => {
    setinputValue("");
    setConfirmed(false);
  };

  const confirmFunc = () => {
    const chosenNumber = parseInt(inputValue);
    if (chosenNumber <= 0) {
      Alert.alert("Inavalid Number", "Number must be between 1 & 99", [
        { text: "Okay", style: "cancel", onPress: resetFunc }
      ]);
      return;
    }
    Keyboard.dismiss();
    setConfirmed(true);
    setSelectedNum(parseInt(inputValue));
    setinputValue("");
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = <Text>chosen Number : {selectedNum}</Text>;
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <Text style={styles.title}>Start a new game</Text>
            <Card style={styles.inputCont}>
              <Text>Select a number</Text>
              <InputField
                style={styles.input}
                blurOnSubmit
                autoCapitalization="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                onChangeText={inputHandler}
                value={inputValue}
              />

              <View style={styles.buttonsCont}>
                <View style={styles.buttonGroup}>
                  <TouchableOpacity onPress={resetFunc}>
                    <Text style={styles.btnInBtnGroup2}>Reset</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={confirmFunc}>
                    <Text style={styles.btnInBtnGroup1}>Confirm</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
            {confirmed ? (
              <View>
                <Card
                  style={{ padding: 10, marginTop: 10, alignItems: "center" }}
                >
                  <Text style={{ color: "#666563" }}>Selected Number</Text>
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
                    {selectedNum}
                  </Text>
                  <TouchableOpacity
                    onPress={() => props.startGameHandler(selectedNum)}
                  >
                    <Text
                      style={{
                        color: Colors.accentColor,
                        // borderColor: Colors.accentColor,
                        // borderWidth: 2,
                        // borderRadius: 7,
                        padding: 4,
                        marginTop: 4
                      }}
                    >
                      Start Game
                    </Text>
                  </TouchableOpacity>
                </Card>
              </View>
            ) : (
              <Text></Text>
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: wp("4%"),
    alignItems: "center"
  },
  title: {
    // fontFamily: "open-sans-bold",
    fontSize: 20,
    marginVertical: 10,
    color: "#666563"
  },
  buttonsCont: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  inputCont: {
    padding: wp("5%"),
    width: wp("80%"),
    alignItems: "center"
  },
  buttons: {
    width: wp("25%")
  },
  input: {
    marginTop: 7,
    width: wp("13%"),
    textAlign: "center",
    height: hp("7%"),
    borderBottomColor: "grey",
    borderWidth: 1,
    borderStyle: "dotted",
    borderRadius: 10,
    marginBottom: hp("2%")
  },
  buttonGroup: {
    flexDirection: "row",
    margin: 12,
    alignItems: "center",
    justifyContent: "space-between"
  },
  btnInBtnGroup1: {
    textAlign: "center",
    width: wp("20%"),
    color: Colors.accentColor,
    borderColor: Colors.accentColor,
    borderWidth: 2,
    borderRadius: 7,
    padding: 4,
    marginTop: 4,
    marginHorizontal: wp("3%")
  },
  btnInBtnGroup2: {
    textAlign: "center",
    width: wp("20%"),
    color: Colors.accentColor,
    borderColor: Colors.primaryColor,
    borderWidth: 2,
    borderRadius: 7,
    padding: 4,
    marginTop: 4,
    marginHorizontal: wp("3%")
  }
});

export default StartGameScreen;
