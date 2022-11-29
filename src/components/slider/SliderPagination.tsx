import { Colors } from "@app/constants/colors";
import React from "react";
import { StyleSheet, View, Animated, Dimensions } from "react-native";

interface ISliderPaginationProps {
  data: string[];
  scrollX: any;
  index: number;
}
const { width } = Dimensions.get("screen");

export const SliderPagination = ({ data, scrollX, index }: ISliderPaginationProps) => {
  return (
    <View style={s.dotsList}>
      {data.map((_, ind) => {
        const inputRange = [(ind - 1) * width, ind * width, (ind + 1) * width];
        const dotsWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 27, 12],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[s.dot, { width: dotsWidth }, ind == index && s.dotActive]}
            key={ind.toString()}></Animated.View>
        );
      })}
    </View>
  );
};

const s = StyleSheet.create({
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#ccc",
    marginHorizontal: 3,
  },

  dotsList: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },

  dotActive: {
    backgroundColor: Colors.dark,
  },
});
