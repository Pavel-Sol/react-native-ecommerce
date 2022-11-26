import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { getProduct } from "@app/redux/asyncActions";
import { DrawerStackParams } from "@app/types/navigations";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

type ProductDetailScreenProps = NativeStackScreenProps<DrawerStackParams, "productDetail">;

export const ProductDetailScreen = ({ route }: ProductDetailScreenProps) => {
  const productId = route.params.productId;
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product.product);

  console.log("product ", product?.id);

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [productId]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text>ProductDetailScreen!!!</Text>
      <Text>Productid {product?.id}</Text>
      <Text>ProductTitle {product?.title}</Text>
    </View>
  );
};
