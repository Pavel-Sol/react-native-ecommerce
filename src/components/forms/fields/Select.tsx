import React from "react";
import { Controller } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet } from "react-native";

export const Select = ({ control, name, options }) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => {
        const handleChange = (curValue: string) => {
          onChange(curValue);
        };

        return (
          <RNPickerSelect
            style={{ ...pickerSelectStyles, placeholder: { color: "#acabab" } }}
            onValueChange={handleChange}
            placeholder={{
              label: "выберете категорию",
              value: "",
            }}
            value={value}
            items={options}
            useNativeAndroidPickerStyle={false}
          />
        );
      }}
      name="category"
      // rules={{ required: true }}
      // defaultValue={action === "Add" ? "" : user.id_role}
    />
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 20,
    borderRadius: 30,
    color: "white",
    padding: 25,
  },
});
