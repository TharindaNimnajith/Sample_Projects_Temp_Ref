import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

export default function App() {
  const [userInputPhone, setuserInputPhone] = useState("");
  const [userInputName, setuserInputName] = useState("");

  const [userInputedData, setuserInputedData] = useState({});

  const onChangeHandlerPhone = value => {
    setuserInputPhone(value);
  };

  const onChangeHandlerName = value => {
    setuserInputName(value);
  };

  const submitData = () => {
    setuserInputedData({
      name: userInputName,
      phone: userInputPhone
    });

    console.log(userInputedData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Phone number"
        style={styles.input}
        keyboardType="number-pad"
        value={userInputPhone}
        onChangeText={onChangeHandlerPhone}
      />

      <TextInput
        placeholder="Name"
        style={styles.input}
        value={userInputName}
        onChangeText={onChangeHandlerName}
      />

      <TouchableOpacity onPress={submitData}>
        <Text style={styles.button}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "90%",
    borderRadius: 6,
    marginTop: "4%"
  },
  button: {
    color: "darkblue",
    fontSize: 20
  }
});
