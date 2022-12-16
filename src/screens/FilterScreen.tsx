import React from "react";
import { StyleSheet, View } from "react-native";
import { FilterForm } from "@app/components/forms/FilterForm";

export const FilterScreen = ({ navigation }) => {
  return (
    <View style={s.container}>
      <FilterForm />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    padding: 10,
  },

  button: {
    backgroundColor: "green",
    padding: 17,
    margin: 10,
    borderRadius: 5,
    fontSize: 18,
    width: 180,
  },
});
