import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./src/navigation/DrawerNavigator";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Router from "./src/navigation/Router";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
