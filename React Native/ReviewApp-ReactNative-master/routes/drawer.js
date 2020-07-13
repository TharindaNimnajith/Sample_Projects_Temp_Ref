import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Homestack from "./homestack";
import AboutStack from "./aboutStack";

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Homestack
  },
  About: {
    screen: AboutStack
  }
});

export default createAppContainer(RootDrawerNavigator);
