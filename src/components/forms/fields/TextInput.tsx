import React from "react";
import { Controller } from "react-hook-form";
import { Text, TextInput as RNTextInput, StyleSheet } from "react-native";

export const TextInput = ({ control, name }) => {
  return (
    <>
      <Text style={styles.label}>{name}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <RNTextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name={name}
        rules={{ required: true }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
  },
  input: {
    backgroundColor: "white",
    borderColor: "none",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
