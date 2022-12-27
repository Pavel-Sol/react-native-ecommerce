import React, { ReactNode } from "react";
import { Controller, Control } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import { Colors } from "@app/constants/colors";

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
            style={{ ...pickerSelectStyles }}
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
            // @ts-ignore
            Icon={() => (
              <AntDesign name="caretdown" size={18} color={Colors.dark} style={s.selectIcon} />
            )}
          />
        );
      }}
      name={name}
    />
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 20,
    borderRadius: 10,
    color: Colors.dark,
    padding: 20,
    backgroundColor: Colors.white,
  },

  placeholder: { color: Colors.dark },
});

const s = StyleSheet.create({
  selectIcon: {
    top: 25,
    right: 40,
  },
});
