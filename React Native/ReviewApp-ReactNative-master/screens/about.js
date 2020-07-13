import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global-styles";

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>About Screen</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     padding: 24
//   }
// });

export default About;
