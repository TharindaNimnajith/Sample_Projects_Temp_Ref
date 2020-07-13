import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/categories-screen";
import MealDetailsScreen from "../screens/meals-details-screen";
import CategoryMealsScreen from "../screens/category-meals-screen";
import Colors from "../constants/colors";
import FavouriteScreen from "../screens/favourite-screen";
import FilterScreen from "../screens/filters-screen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const mealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailsScreen,
  },
  {
    headerLayoutPreset: "center",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const mealsFavouriteNavigator = createStackNavigator(
  {
    Favourites: FavouriteScreen,
    MealDetail: MealDetailsScreen,
  },
  {
    headerLayoutPreset: "center",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const mealsTabNavigator = createMaterialBottomTabNavigator(
  {
    Meals: {
      screen: mealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
        tabBarColor: Colors.primaryColor,
      },
    },
    Favourites: {
      screen: mealsFavouriteNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarColor: Colors.primaryColor,
      },
    },
  },
  {
    activeTintColor: Colors.primaryColor,
    shifting: true,
  }
);

const filterNavigator = createStackNavigator(
  {
    Filters: FilterScreen,
  },
  {
    headerLayoutPreset: "center",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: mealsTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: filterNavigator,
  },
  {
    drawerBackgroundColor: "rgba(255, 255, 255, 0.9)",
    contentOptions: {
      activeTintColor: Colors.primaryColor,
      labelStyle: {},
    },
  }
);

export default createAppContainer(MainNavigator);
