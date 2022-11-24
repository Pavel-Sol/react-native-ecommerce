import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { Form } from "@app/components/forms/FormContainer";

export const FormScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Text>FormScreen!!!</Text>

      <Form />
    </View>
  );
};
