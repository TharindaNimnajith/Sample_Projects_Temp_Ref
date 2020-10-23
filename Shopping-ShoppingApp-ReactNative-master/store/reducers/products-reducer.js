import PRODUCTS from "../../data/data";

const iniState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.ownerId == "u2"),
};

export default (state = iniState, action) => {
  return state;
};
