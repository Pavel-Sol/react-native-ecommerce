import { useAppSelector } from "@app/hooks";
import React from "react";
import { StyleSheet, View } from "react-native";
import { CardSkeleton } from "./cardSkeleton";
import { HorizontalCardSkeleton } from "./horizontalCardSkeleton";

export const CardListLoader = () => {
  const loading = useAppSelector((state) => state.product.loading);
  const cardsInRow = useAppSelector((state) => state.productFilter.cardsInRow);
  console.log("cardsInRow", cardsInRow);

  if (!loading) {
    return null;
  }

  return (
    <>
      {cardsInRow === 2 && (
        <View style={s.container}>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </View>
      )}

      {cardsInRow === 1 && (
        <View style={s.containerHorizontal}>
          <HorizontalCardSkeleton />
          <HorizontalCardSkeleton />
          <HorizontalCardSkeleton />
          <HorizontalCardSkeleton />
        </View>
      )}
    </>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 16,
    paddingBottom: 50,
  },
  containerHorizontal: {
    paddingBottom: 50,
  },
});
