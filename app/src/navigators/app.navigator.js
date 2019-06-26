import { createStackNavigator } from "react-navigation";
import SplashScreen from "../screens/splash/splash.screen";
import { MainNavigator } from "./main.navigator";
import LoginScreen from "../screens/login/login.screen";

const stackNavigatorOptions = {
  headerMode: "none",
  cardStyle: {
    backgroundColor: "white"
  }
};

export const AppNavigator = createStackNavigator(
  {
    Splash: { screen: SplashScreen },
    Main: { screen: MainNavigator },
    Login: { screen: LoginScreen }
  },
  stackNavigatorOptions
);
