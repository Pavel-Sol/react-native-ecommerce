import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "@app/screens/HomeScreen";
import { AuthNavigator } from "./AuthNavigator";
import { FilterScreen } from "@app/screens/FilterScreen";
import { ProductDetailScreen } from "@app/screens/ProductDetailScreen";
import { DrawerStackParams } from "@app/types/navigations";
import { CartScreen } from "@app/screens/CartScreen";
import { CustomDrawer } from "./CustomDrawer";
import { Colors } from "@app/constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Drawer = createDrawerNavigator<DrawerStackParams>();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: Colors.white,
        },
        drawerActiveBackgroundColor: Colors.primary,
        drawerActiveTintColor: Colors.white,
        drawerInactiveTintColor: Colors.primary,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "Home",
          drawerIcon: ({ focused }) => (
            <AntDesign name="home" size={24} color={focused ? Colors.white : Colors.primary} />
          ),
        }}
      />
      <Drawer.Screen
        name="cart"
        component={CartScreen}
        options={{
          title: "Cart",
          drawerIcon: ({ focused }) => (
            <AntDesign
              name="shoppingcart"
              size={24}
              color={focused ? Colors.white : Colors.primary}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="productDetail"
        component={ProductDetailScreen}
        options={() => ({
          drawerItemStyle: { display: "none" },
          headerTitle: "",
        })}
      />

      <Drawer.Screen
        name="filter"
        component={FilterScreen}
        options={({ route, navigation }) => ({
          drawerItemStyle: { display: "none" },
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 20 }} onPress={navigation.goBack}>
              <Ionicons name="arrow-back" size={34} color="white" />
            </TouchableOpacity>
          ),
        })}
      />
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
