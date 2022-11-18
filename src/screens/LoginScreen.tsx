import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { RootState } from "../redux/store";

export const LoginScreen = ({ navigation }) => {
  const username = useSelector((state: RootState) => state.user.username);
  // const dispatch = useDispatch();

  useEffect(() => {
    if (username) {
      navigation.navigate("home");
    }
  }, [username]);

  const loginHandler = async () => {
    try {
      const res = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
        email: "maria@mail.com",
        password: "12345",
      });
      console.log("res", res.data.access_token);

      if (res?.data?.access_token) {
        AsyncStorage.setItem("token", res?.data?.access_token);
      }
    } catch (error) {
      console.log(error, error);
    }
  };

  // console.log("username ", username);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text>LoginScreen!!!</Text>

      <TouchableOpacity onPress={() => navigation.navigate("home")} style={styles.button}>
        <Text>Go To login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={loginHandler}>
        <Text> LOG IN</Text>
      </TouchableOpacity>
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
});
