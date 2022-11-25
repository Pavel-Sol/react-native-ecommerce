import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { LoginForm } from "@app/components/forms/LoginForm";
import { ButtonPrimary } from "@app/components/button/ButtonPrimary";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAppDispatch, useAppSelector } from "@app/hooks";

export const LoginScreen = ({ navigation }) => {
  const username = useAppSelector((state) => state.user.username);

  // useEffect(() => {
  //   console.log("work");
  //   if (username) navigation.navigate("home");
  // }, [username]);

  return (
    <View style={s.container}>
      <LoginForm />

      {/* <ButtonPrimary onPress={() => navigation.navigate("home")} style={s.button}>
        Go To home
      </ButtonPrimary> */}
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#0000001a",
  },

  button: {
    backgroundColor: "blue",
    padding: 17,
    margin: 10,
    borderRadius: 5,
    fontSize: 18,
    width: 180,
  },
});
