import React from "react";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const CardSkeleton = () => {
  return (
    <View style={s.container}>
      <ShimmerPlaceHolder style={s.image}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder style={s.title}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder style={s.price}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder style={s.price}></ShimmerPlaceHolder>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    width: "48%",
    alignItems: "center",
    // backgroundColor: "green",
    padding: 7,
    marginBottom: 30,
  },
  image: {
    height: 150,
    width: "100%",
    borderRadius: 10,
    marginBottom: 20,
  },

  title: {
    height: 30,
    width: "100%",
    borderRadius: 5,
    marginBottom: 10,
  },
  price: {
    height: 20,
    width: "100%",
    borderRadius: 5,
    marginBottom: 10,
  },
});
