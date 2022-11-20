import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "@app/screens/HomeScreen";
import { AuthNavigator } from "./AuthNavigator";
import { FilterScreen } from "@app/screens/FilterScreen";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={HomeScreen} />
      <Drawer.Screen name="filter" component={FilterScreen} />
      <Drawer.Screen
        name="auth"
        component={AuthNavigator}
        options={{
          headerShown: false,
          drawerItemStyle: {
            display: "none",
          },
        }}
      />
    </Drawer.Navigator>
  );
};
