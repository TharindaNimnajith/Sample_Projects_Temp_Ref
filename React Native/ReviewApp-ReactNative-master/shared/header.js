import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const Header = ({ navigation }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require("../assets/images/game_bg.png")}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>Gamezone</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: wp("93%"),
    // backgroundColor: "red",
    height: hp("10%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,

    textAlign: "center",
    color: "#333",
    letterSpacing: 1
  },
  icon: {
    position: "absolute",
    left: 10
  }
});

export default Header;
