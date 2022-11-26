import React from "react";
import { Colors } from "@app/constants/colors";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";

interface IButtonPrimary {
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
}

export const ButtonPrimary = ({ children, onPress, disabled, style }: IButtonPrimary) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={[s.button, style]}>
      <Text style={s.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  button: {
    color: "white",
    minHeight: 60,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: Colors.white,
    textTransform: "uppercase",
    fontWeight: "600",
  },
});
