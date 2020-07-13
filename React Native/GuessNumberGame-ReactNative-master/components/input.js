import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const InputField = props => {
  return <TextInput style={{ ...styles.input, ...props.style }} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    height: hp("5%"),
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: hp("2%")
  }
});
export default InputField;
