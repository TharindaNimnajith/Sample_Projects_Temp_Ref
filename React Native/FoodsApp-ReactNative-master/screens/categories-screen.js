import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { CATEGORIES } from "../data/dummy";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../constants/colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/header-button";

const CategoriesScreen = ({ navigation }) => {
  const renderItem = (data) => {
    return (
      <View
        style={{
          flex: 1,
          margin: wp("3%"),
          height: hp("15%"),
          // backgroundColor: data.item.color,
          // alignItems: "flex-end",
          justifyContent: "flex-end",
          padding: 0,
          borderRadius: 10,
          elevation: 6,
          overflow: "hidden",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate({
              routeName: "CategoryMeals",
              params: {
                categoryId: data.item.id,
              },
            });
          }}
        >
          <ImageBackground
            source={{
              uri: data.item.color,
            }}
            style={styles.bgImage}
          >
            <View>
              <View style={styles.titleContainer}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  numberOfLines={2}
                >
                  {data.item.title}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: "rgba(188, 178, 178, 0.2)" }}>
      <FlatList numColumns={2} data={CATEGORIES} renderItem={renderItem} />
    </View>
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meals Categories",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("1%"),
  },
  mealRow: {
    flexDirection: "row",
    height: "100%",
  },

  gridItem: {},
});

export default CategoriesScreen;
