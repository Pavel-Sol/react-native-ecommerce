import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { useAppDispatch } from "@app/hooks";
import { login } from "@app/redux/asyncActions";

export const LoginScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [email, onChangeEmail] = useState("maria@mail.com");
  const [password, onChangePassword] = useState("12345");

  const loginHandler = () => {
    dispatch(login({ email, password }));
  };

  return (
    <View>
      <Text>LoginScreen!!!</Text>

      <TouchableOpacity onPress={() => navigation.navigate("home")} style={styles.button}>
        <Text>Go To home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={loginHandler}>
        <Text> LOG IN</Text>
      </TouchableOpacity>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={onChangeEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={onChangePassword}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 17,
    margin: 10,
    borderRadius: 5,
    fontSize: 18,
    width: 180,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },
});
