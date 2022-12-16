import React from "react";
import { StyleSheet, View } from "react-native";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector, useOnFocus } from "@app/hooks";
import { fetchCategories } from "@app/redux/asyncActions";
import { Select } from "./fields/Select";
import { setCategory } from "@app/redux/reducers/productFilterReducer";

type FormData = {
  category: number;
};

export const FilterForm = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.productFilter.categories);
  const categoriesOptions = categories.map((item) => ({ label: item.name, value: item.id }));

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
});
