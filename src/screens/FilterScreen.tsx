import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { setCategory } from "@app/redux/reducers/productFilterReducer";

export const FilterScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const testCategory = () => {
    dispatch(setCategory(2));
  };

  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text>-------FilterScreen-----</Text>

        <TouchableOpacity style={s.button} onPress={testCategory}>
          <Text>change CATEGORY!!!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  cardList: {
    paddingBottom: 40,
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
