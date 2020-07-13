import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";

const BottomTabBar = () => {
  return (
    <View style={styles.bottomTab}>
      <TouchableOpacity>
        <View style={styles.tabItem}>
          <MaterialIcons name="home" size={25} color="#7c7d80" />
          <Text style={styles.tabTitles}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.tabItem}>
          <MaterialIcons name="explore" size={25} color="#7c7d80" />
          <Text style={styles.tabTitles}>Explore</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.tabItem}>
          <MaterialIcons name="whatshot" size={25} color="#7c7d80" />
          <Text style={styles.tabTitles}>Trending</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.tabItem}>
          <MaterialIcons name="subscriptions" size={25} color="#7c7d80" />
          <Text style={styles.tabTitles}>Subscriptions</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.tabItem}>
          <MaterialIcons name="folder" size={27} color="#7c7d80" />
          <Text style={styles.tabTitles}>Library</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTab: {
    height: 60,
    backgroundColor: "white",
    elevation: 3,
    // marginTop: hp("3%"),
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5"
  },
  icons: {
    flexDirection: "row",
    width: wp("22%"),
    justifyContent: "space-around"
  },
  tabTitles: {
    fontSize: 10,
    padding: 3,
    color: "#7c7d80"
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default BottomTabBar;
