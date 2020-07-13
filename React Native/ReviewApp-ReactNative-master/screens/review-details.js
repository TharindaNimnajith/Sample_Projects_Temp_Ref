import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global-styles";
import CardImple from "../shared/card-component";

const ReviewDetails = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <CardImple
        title={navigation.getParam("title")}
        body={navigation.getParam("body")}
        rating={navigation.getParam("rating")}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     padding: 24
//   }
// });

export default ReviewDetails;
