import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

interface ISliderItemProps {
  item: string;
}

const { width } = Dimensions.get("screen");

export const SliderItem = ({ item }: ISliderItemProps) => {
  return (
    <View style={s.imageContainer}>
      <Image
        source={{
          uri: item,
        }}
        style={s.image}
        resizeMode="cover"
      />
    </View>
  );
};

const s = StyleSheet.create({
  imageContainer: {},
  image: {
    width: width - 20,
    height: 300,
  },
});
