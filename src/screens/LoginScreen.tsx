import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { LoginForm } from "@app/components/forms/LoginForm";
import { useAppSelector } from "@app/hooks";
import { usernameSelector } from "@app/redux/selectors";
import { Colors } from "@app/constants/colors";

export const LoginScreen = ({ navigation }) => {
  const username = useAppSelector(usernameSelector);

  useEffect(() => {
    console.log("work");
    if (username) navigation.navigate("home");
  }, [username]);

  return (
    <View style={s.container}>
      <LoginForm />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: Colors.lightDark,
  },
});
