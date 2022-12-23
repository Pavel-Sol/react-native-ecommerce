import React from "react";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const HorizontalCardSkeleton = () => {
  return (
    <View style={s.container}>
      <ShimmerPlaceHolder style={s.image}></ShimmerPlaceHolder>
      <View style={s.content}>
        <ShimmerPlaceHolder style={s.title}></ShimmerPlaceHolder>
        <ShimmerPlaceHolder style={s.price}></ShimmerPlaceHolder>
        <ShimmerPlaceHolder style={s.price}></ShimmerPlaceHolder>
        <ShimmerPlaceHolder style={s.price}></ShimmerPlaceHolder>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 15,
    marginBottom: 30,
  },

  image: {
    height: 120,
    width: "50%",
    borderRadius: 10,
    marginRight: 20,
  },

  content: {
    width: "40%",
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
