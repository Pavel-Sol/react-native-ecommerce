import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector, useOnFocus } from "@app/hooks";
import { fetchCategories } from "@app/redux/asyncActions";
import { Select } from "./fields/Select";
import { setCardsInRow, setCategory } from "@app/redux/reducers/productFilterReducer";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@app/constants/colors";

type FormData = {
  category: number;
};

export const FilterForm = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.productFilter.categories);
  const categoriesOptions = categories.map((item) => ({ label: item.name, value: item.id }));
  const cardsInRow = useAppSelector((state) => state.productFilter.cardsInRow);

  const handleSetCardsInRow = (quantity: number) => {
    dispatch(setCardsInRow(quantity));
  };

  const handleSetCategory = (categoryId: number) => {
    if (categoryId) dispatch(setCategory(categoryId));
  };

  useOnFocus(() => {
    dispatch(fetchCategories());
  }, []);

  const {
    control,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: { category: 1 } });

  return (
    <View style={s.selectWrapper}>
      <View style={s.buttonGroup}>
        <TouchableOpacity style={s.button}>
          <FontAwesome5
            name="table"
            size={34}
            color={cardsInRow === 2 ? Colors.primary : Colors.basicGray}
            onPress={() => handleSetCardsInRow(2)}
          />
        </TouchableOpacity>

        <TouchableOpacity style={s.button}>
          <MaterialIcons
            name="table-rows"
            size={34}
            color={cardsInRow === 1 ? Colors.primary : Colors.basicGray}
            onPress={() => handleSetCardsInRow(1)}
          />
        </TouchableOpacity>
      </View>

      <Select
        control={control}
        name="category"
        options={categoriesOptions}
        callback={handleSetCategory}
      />
    </View>
  );
};

const s = StyleSheet.create({
  selectWrapper: {
    marginTop: 20,
  },

  buttonGroup: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
  },

  button: {
    // backgroundColor: "aqua",
    paddingHorizontal: 40,
  },
});
