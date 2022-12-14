import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, FlatList, StyleSheet, Animated } from "react-native";
import { SliderItem } from "./SliderItem";
import { SliderPagination } from "./SliderPagination";
import { ButtonPrimary } from "../button/ButtonPrimary";

interface ISliderProps {
  data: string[];
}

export const Slider = ({ data = [] }: ISliderProps) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);

  // const [count, setCount] = useState(0);
  // console.log("count ", count);

  // useFocusEffect(
  //   useCallback(() => {
  //     return () => {
  //       setIndex(0);
  //     };
  //   }, [])
  // );

  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      { useNativeDriver: false }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0]?.index);
  }).current;

  const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 50 }).current;

  return (
    <>
      <View style={s.sliderContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <SliderItem item={item} />}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
      </View>
      <SliderPagination data={data} scrollX={scrollX} index={index} />
      {/* <ButtonPrimary onPress={() => setCount(count + 1)}>+</ButtonPrimary> */}
    </>
  );
};

const s = StyleSheet.create({
  sliderContainer: {
    height: 300,
  },
});
