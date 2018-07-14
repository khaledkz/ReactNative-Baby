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

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    khaled: khaledScreen,
    wafa: WafaScreen
  },
  {
    initialRouteName: "Home"
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

// const Dates = createStackNavigator({
//   Links: HomeDates
// });

// Dates.navigationOptions = {
//   tabBarLabel: "Dates",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === "ios"
//           ? `ios-information-circle${focused ? "" : "-outline"}`
//           : "md-information-circle"
//       }
//     />
//   )
// };

// const LinksStack = createStackNavigator({
//   Links: LinksScreen
// });

// LinksStack.navigationOptions = {
//   tabBarLabel: "Links",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === "ios"
//           ? `ios-link${focused ? "" : "-outline"}`
//           : "md-link"
//       }
//     />
//   )
// };



// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen
// });

// SettingsStack.navigationOptions = {
//   tabBarLabel: "Settings",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === "ios"
//           ? `ios-options${focused ? "" : "-outline"}`
//           : "md-options"
//       }
//     />
//   )
// };

let GenerateRoutes=(()=>{

let routes = [
  {
    order: 1,
    pagesTotal: 1,
    iosIcon: "ios-options",
    androidIcon: "md-options",
    routeName:'SettingsStack',
    page:{name:'Settings',component:SettingsScreen}
  }
];
 
  let myRoutes=[];
  routes.map(route=>{
       route.routeName = createStackNavigator({
    Settings: SettingsScreen,[route.page.name]:route.page.component
  });

  route.routeName.navigationOptions = {
  tabBarLabel: route.page.name,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `${route.iosIcon}${focused ? "" : "-outline"}`
          : route.androidIcon
      }
    />
  )
};
myRoutes=[...myRoutes,route.routeName]
 
})
 return  myRoutes[0];

}) 
console.log()
console.log({HomeStack})
 
export default createBottomTabNavigator({page:GenerateRoutes()});
