import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  text: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333"
  },
  paragraph: {
    marginVertical: 20,
    lineHeight: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    color: "black",
    fontSize: 18,
    width: wp("80%"),
    borderRadius: 6,
    margin: 10
  },
  containerForm: {
    alignItems: "center",
    flex: 1,
    padding: 5
  },
  error: {
    color: "crimson",
    fontWeight: "bold",

    marginTop: 3,
    textAlign: "center"
  }
});

export const images = {
  ratings: {
    "1": require("../assets/images/rating-1.png"),
    "2": require("../assets/images/rating-2.png"),
    "3": require("../assets/images/rating-3.png"),
    "4": require("../assets/images/rating-4.png"),
    "5": require("../assets/images/rating-5.png")
  }
};
