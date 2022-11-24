import React from "react";
import { View, StyleSheet, Button, Alert, TouchableHighlight } from "react-native";
import { useForm } from "react-hook-form";
import Constants from "expo-constants";
import { TextInput } from "./fields/TextInput";
import { Select } from "./fields/Select";

export const Form = () => {
  const testOptions = [
    { value: "123", label: "green" },
    { value: "456", label: "black" },
  ];

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // console.log("errors", errors);

  return (
    <View style={styles.container}>
      <TextInput control={control} name="username" />

      <Select control={control} name="category" options={testOptions} />

      <View style={styles.button}>
        <Button title="Button" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "#ec5990",
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "#0e101c",
  },
  input: {
    backgroundColor: "white",
    borderColor: "none",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
