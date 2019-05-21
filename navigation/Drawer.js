import React, { Component } from "react";
import { Text, View, Platform, Dimensions } from "react-native";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import MenuDrawer from "../components/MenuDrawer";
const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.6,
  contentComponent: ({ navigation }) => {
    return <MenuDrawer navigation={navigation} />;
  }
};

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home
    },
    Settings: {
      screen: Settings
    }
  },
  DrawerConfig
);
export default createAppContainer(DrawerNavigator);
