import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/yt_logo_rgb_light.png")}
        style={{ width: 98, height: 22 }}
      />

      <View style={styles.icons}>
        <TouchableOpacity>
          <MaterialIcons name="videocam" size={25} color="#7c7d80" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="search" size={25} color="#7c7d80" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="account-circle" size={25} color="#7c7d80" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: "white",
    elevation: 3,
    marginTop: hp("3%"),
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  icons: {
    flexDirection: "row",
    width: wp("31%"),
    // marginLeft: 5,
    justifyContent: "space-around"
  }
});

export default Header;
