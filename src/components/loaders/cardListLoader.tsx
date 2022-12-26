import { useAppSelector } from "@app/hooks";
import { cardsInRowSelector, loadingSelector } from "@app/redux/selectors";
import React from "react";
import { StyleSheet, View } from "react-native";
import { CardSkeleton } from "./cardSkeleton";
import { HorizontalCardSkeleton } from "./horizontalCardSkeleton";

export const CardListLoader = () => {
  const loading = useAppSelector(loadingSelector);
  const cardsInRow = useAppSelector(cardsInRowSelector);

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
