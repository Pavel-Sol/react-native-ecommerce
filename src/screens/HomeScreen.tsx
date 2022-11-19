import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useAppSelector } from "@app/hooks";

export const HomeScreen = ({ navigation }) => {
  const username = useAppSelector((state) => state.user.username);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text>HomeScreen!!!</Text>
      {username && <Text>{username}</Text>}

      <TouchableOpacity onPress={() => navigation.navigate("auth")} style={styles.button}>
        <Text>Go To login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
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
