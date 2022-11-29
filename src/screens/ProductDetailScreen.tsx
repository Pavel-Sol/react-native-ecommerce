import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { getProduct } from "@app/redux/asyncActions";
import { DrawerStackParams } from "@app/types/navigations";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from "react-native";
import { Slider } from "@app/components/slider/Slider";

type ProductDetailScreenProps = NativeStackScreenProps<DrawerStackParams, "productDetail">;

export const ProductDetailScreen = ({ route }: ProductDetailScreenProps) => {
  const productId = route.params.productId;
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.product.product);

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [productId]);

  return (
    <View style={s.container}>
      <Slider data={product?.images} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
