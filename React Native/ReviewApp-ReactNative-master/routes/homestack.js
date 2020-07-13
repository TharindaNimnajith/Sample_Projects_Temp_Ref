import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/review-details";
import Header from "../shared/header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import React from "react";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />
      };
    }
  },
  ReveiwDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details"
      //headerStyle: { backgroundColor: "#eee" }
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      flex: 1,
      backgroundColor: "#dee3e0",
      height: hp("13%")
    }
  }
});

export default createAppContainer(HomeStack);
