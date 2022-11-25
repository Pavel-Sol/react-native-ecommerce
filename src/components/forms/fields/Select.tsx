import React from "react";
import { Controller, Control } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet } from "react-native";

interface ISelect {
  control: Control<any>;
  name: string;
  options: any[];
  callback?: (e: any) => void;
}

export const Select = ({ control, name, options, callback }: ISelect) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <RNPickerSelect
            style={{ ...pickerSelectStyles, placeholder: { color: "#acabab" } }}
            onValueChange={(e) => {
              onChange(e);
              callback && callback(e);
            }}
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
      name={name}
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
