import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { Button } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";

import Colors from "../constants/colors";

const ProductItem = (props) => {
  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableOpacity onPress={props.onViewDetail} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
              <Button
                title="View Details"
                type="outline"
                raised
                buttonStyle={{
                  borderColor: Colors.accent,
                  borderWidth: 2,
                  padding: 5,
                }}
                onPress={props.onViewDetail}
                titleStyle={{ color: Colors.blackText }}
                containerStyle={{}}
              />
              <Button
                // title="Add to cart"
                onPress={props.onAddToCart}
                type="outline"
                buttonStyle={{
                  borderColor: Colors.accent,
                  borderWidth: 0,
                }}
                titleStyle={{ color: Colors.blackText }}
                containerStyle={{}}
                icon={<Icon name="cart-plus" size={24} color={Colors.accent} />}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: hp("43%"),
    marginHorizontal: wp("5%"),
    marginVertical: hp("2%"),
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    color: Colors.primary,
  },
  price: {
    fontSize: 14,
    color: Colors.blackText,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
});

export default ProductItem;
