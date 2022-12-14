import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useAppDispatch, useAppSelector } from "@app/hooks";

export const CartScreen = () => {
  const cartList = useAppSelector((state) => state.cart.cartList);
  // console.log("cartList", cartList);

  return (
    <View>
      <Text>Cart Screen</Text>

      {!!cartList.length &&
        cartList.map((item) => (
          <Text key={item.id}>
            {item.title} {item.count}
          </Text>
        ))}
    </View>
  );
};

const s = StyleSheet.create({});
