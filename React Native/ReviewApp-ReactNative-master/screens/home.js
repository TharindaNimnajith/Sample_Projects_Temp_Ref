import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { Button, Card, Overlay } from "react-native-elements";
import { globalStyles, images } from "../styles/global-styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import ReviewForm from "./reviewForm";
// import Card from "../shared/card-component";

const Home = ({ navigation }) => {
  const [visible, setvisible] = useState(false);
  const [reviews, setreviews] = useState([
    {
      title: "Title 1",
      rating: 4,
      body: "lorem ipsum",
      key: "1",
      imgUrl: "../assets/images/cod4.jpg"
    },
    {
      title: "Title 2",
      rating: 5,
      body: "lorem ipsum",
      key: "2",
      imgUrl: "../assets/images/cod4.jpg"
    },
    {
      title: "Title 3",
      rating: 2,
      body: "lorem ipsum",
      key: "3",
      imgUrl: "../assets/images/cod4.jpg"
    },
    {
      title: "Title 4",
      rating: 4,
      body: "lorem ipsum",
      key: "5",
      imgUrl: "../assets/images/cod4.jpg"
    }
  ]);

  const addReview = review => {
    review.key = Math.random().toString();
    setreviews(current => {
      return [review, ...current];
    });
    setvisible(false);
  };

  const pressHandler = ({ naviagtion }) => {
    navigation.navigate("ReveiwDetails");
  };

  return (
    <View style={globalStyles.container}>
      {visible && (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Overlay
              animationType="slide"
              isVisible
              overlayBackgroundColor="rgba(248, 245, 245, 0.90)"
              width={320}
              height={400}
              overlayStyle={{
                padding: 20
              }}
            >
              <MaterialIcons
                style={{
                  color: "red",
                  marginLeft: "auto",
                  marginRight: "auto",
                  alignItems: "center"
                }}
                name="close"
                size={24}
                onPress={() => {
                  setvisible(false);
                }}
              />

              <ReviewForm addReview={addReview} />
            </Overlay>
          </View>
        </TouchableWithoutFeedback>
      )}

      <MaterialIcons
        style={{
          // color: "red",
          marginTop: hp("1%"),
          marginLeft: "auto",
          marginRight: "auto"
        }}
        name="add"
        size={24}
        onPress={() => {
          setvisible(true);
        }}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReveiwDetails", item)}
          >
            <Card
              containerStyle={{
                marginTop: 4,
                alignItems: "flex-start",
                marginBottom: 0
              }}
              titleStyle={{ fontSize: 17, paddingLeft: 5, marginBottom: 0 }}
              title={item.title}
              // image={require("../assets/images/cod4.jpg")}
            >
              <Image source={images.ratings[item.rating]} />
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
