import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import HomeDates from "../screens/Dates";
import khaledScreen from "../screens/KhaledScreen";
import WafaScreen from "../screens/WafaScreen";

const generateNavigation = (routeStack, label, iosIcon, androidIcon) => {
  routeStack.navigationOptions = {
    tabBarLabel: label,
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === "ios"
            ? `${iosIcon}${focused ? "" : "-outline"}`
            : androidIcon
        }
      />
    )
  };
};

const HomeStack = createStackNavigator(
  { HomeScreen, khaledScreen, WafaScreen },
  { initialRouteName: "HomeScreen" }
);
generateNavigation(
  HomeStack,
  "Home",
  "ios-information-circle",
  "md-information-circle"
);

const Dates = createStackNavigator({ HomeDates });
generateNavigation(
  Dates,
  "Dates",
  "ios-information-circle",
  "md-information-circle"
);

const LinksStack = createStackNavigator({ LinksScreen });
generateNavigation(LinksStack, "Link", "ios-link", "md-link");

const SettingsStack = createStackNavigator({ SettingsScreen });
generateNavigation(SettingsStack, "Settings", "ios-options", "md-options");

export default createBottomTabNavigator({ HomeStack, Dates, LinksStack });
