import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MealItem from "../components/meal-item";
import { MEALS, CATEGORIES } from "../data/dummy";
import { useSelector } from "react-redux";

const FavouriteScreen = (props) => {
  let selectedcat = "";

  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  // selectedcat = CATEGORIES.find((cat) => cat.id == "c1");

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <Text style={{ color: "red", fontWeight: "bold" }}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }

  const renderingItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList data={favMeals} renderItem={renderingItem} />
    </View>
  );
};

FavouriteScreen.navigationOptions = {};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavouriteScreen;
