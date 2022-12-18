import React from "react";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const DetailSkeleton = () => {
  return (
    <View style={s.container}>
      <ShimmerPlaceHolder style={s.image}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder style={s.title}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder style={s.text}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder style={s.text}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder style={s.text}></ShimmerPlaceHolder>
      <ShimmerPlaceHolder style={s.text}></ShimmerPlaceHolder>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  title: {
    marginTop: 40,
    marginBottom: 40,
    width: "100%",
    height: 50,
    borderRadius: 10,
  },
  text: {
    width: "100%",
    height: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
});
