import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "@app/screens/HomeScreen";
import { AuthNavigator } from "./AuthNavigator";
import { FilterScreen } from "@app/screens/FilterScreen";
import { ProductDetailScreen } from "@app/screens/ProductDetailScreen";
import { DrawerStackParams } from "@app/types/navigations";
import { CartScreen } from "@app/screens/CartScreen";

const Drawer = createDrawerNavigator<DrawerStackParams>();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={HomeScreen} />
      <Drawer.Screen name="cart" component={CartScreen} />
      <Drawer.Screen
        name="productDetail"
        component={ProductDetailScreen}
        options={({ route, navigation }) => ({
          drawerItemStyle: { display: "none" },
        })}
      />

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
