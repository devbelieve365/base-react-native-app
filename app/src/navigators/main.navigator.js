import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import BottomTabIcon from "../components/common/bottom-tab-icon";
import SettingsScreen from "../screens/settings/settings.screen";

export const MainNavigator = createBottomTabNavigator(
  {
    Dashboard: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <BottomTabIcon
            focused={focused}
            source={require("../../res/icon/home.png")}
          />
        )
      }
    },
    Deposit: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <BottomTabIcon
            focused={focused}
            source={require("../../res/icon/wallet.png")}
          />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <BottomTabIcon
            focused={focused}
            source={require("../../res/icon/gear.png")}
          />
        )
      }
    }
  },
  {
    tabBarPosition: "bottom",
    initialRouteName: "Dashboard",
    backBehavior: "none",
    tabBarOptions: {
      indicatorStyle: {
        backgroundColor: "transparent"
      },
      showIcon: true,
      showLabel: false,
      upperCaseLabel: false,
      tabStyle: {
        alignItems: "center",
        justifyContent: "center"
      },
      style: {
        backgroundColor: "white",
        justifyContent: "flex-end",
        borderTopWidth: 1,
        borderColor: "#707070"
      },
      iconStyle: {
        justifyContent: "center",
        alignItems: "center"
      },
      upperCaseLabel: false
    }
  }
);
