import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';

import ListProfe from "./screens/ListProfe";
import Home from "./screens/Home";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "HOME",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#54B8CA" },
        }}
      />
      <Drawer.Screen name="List" component={ListProfe} />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
