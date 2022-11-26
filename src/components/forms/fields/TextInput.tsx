import React, { useState } from "react";
import { Colors } from "@app/constants/colors";
import { Controller, Control } from "react-hook-form";
import { Text, TextInput as RNTextInput, StyleSheet, TextInputProps } from "react-native";

interface ITextInput extends TextInputProps {
  control: Control<any>;
  name: string;
}

export const TextInput = ({ control, name, ...props }: ITextInput) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <Text style={s().label}>{name}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <RNTextInput
            style={s(isFocused).input}
            onBlur={() => {
              onBlur();
              setIsFocused(false);
            }}
            onFocus={() => setIsFocused(true)}
            onChangeText={onChange}
            value={value}
            {...props}
          />
        )}
        name={name}
        rules={{ required: true }}
      />
    </>
  );
};

const s = (isFocused?: boolean) =>
  StyleSheet.create({
    label: {
      color: Colors.primary,
      marginTop: 20,
      marginBottom: 5,
      marginLeft: 0,
    },
    input: {
      backgroundColor: Colors.white,
      borderWidth: 1,
      borderColor: isFocused ? Colors.primary : Colors.white,
      height: 60,
      paddingHorizontal: 15,
      borderRadius: 8,
    },
  });
