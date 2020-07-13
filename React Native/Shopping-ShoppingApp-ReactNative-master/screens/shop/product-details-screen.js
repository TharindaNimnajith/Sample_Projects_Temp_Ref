import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import { useSelector } from "react-redux";
import Colors from "../../constants/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ProductDetailScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button
          title="Add to cart"
          onPress={props.onAddToCart}
          raised
          type="solid"
          buttonStyle={{
            borderColor: Colors.accent,
            backgroundColor: Colors.accent,
            padding: 10,
          }}
          titleStyle={{ color: Colors.whiteText, marginRight: 20 }}
          containerStyle={{
            justifyContent: "space-between",
          }}
          icon={<Icon name="cart-plus" size={24} color={Colors.whiteText} />}
          iconRight
        />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: hp("50%"),
  },
  actions: {
    marginVertical: hp("2%"),
    alignItems: "center",
  },
  price: {
    fontSize: 20,
    color: Colors.accent,
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    color: Colors.blackText,
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
  },
});

export default ProductDetailScreen;
