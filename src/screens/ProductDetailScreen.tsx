import { DrawerStackParams } from "@app/types/navigations";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

type ProductDetailScreenProps = NativeStackScreenProps<DrawerStackParams, "productDetail">;

export const ProductDetailScreen = ({ route }: ProductDetailScreenProps) => {
  const productId = route.params.productId;
  console.log("productId ", productId);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text>ProductDetailScreen!!!</Text>
    </View>
  );
};
