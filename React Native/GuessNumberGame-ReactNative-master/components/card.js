import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: wp("4%"),
    alignItems: "center"
  },

  card: {
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    backgroundColor: "white",
    borderRadius: 10
  }
});

export default Card;
