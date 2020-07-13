import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import { globalStyles, images } from "../styles/global-styles";

const CardImple = ({ title, rating, body }) => {
  const ratingsss = rating;
  return (
    <Card title={title} image={require("../assets/images/cod4.jpg")}>
      {}
      <Text style={{ marginBottom: 10 }}>{body}</Text>
      <View style={styles.ratings}>
        <Text>Ratings : </Text>
        <Image source={images.ratings[ratingsss]} />
      </View>

      <Button
        icon={
          <Icon
            size={18}
            containerStyle={styles.icon}
            type="font-awesome"
            name="heartbeat"
            color="#ffffff"
          />
        }
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0
        }}
        title="Review"
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 10
  },
  ratings: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10
  }
});

export default CardImple;
