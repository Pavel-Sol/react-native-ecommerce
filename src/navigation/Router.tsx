import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./DrawerNavigator";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { setUsername } from "../redux/authReducer";

import { useAppDispatch } from "./../hooks";
// import { login } from "@redux/reducers/authReducer";
import { login } from "./../redux/reducers/authReducer";

// import { useAppDispatch } from "redux/store";

// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();

const Router = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // const authMe = async () => {
    //   const token = await AsyncStorage.getItem("token");
    //   console.log("token from ls", token);
    //   if (token) {
    //     try {
    //       const res = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
    //         headers: {
    //           Authorization: "Bearer " + token,
    //         },
    //       });
    //       console.log("res authMe!!!!!!!!!!!", res?.data?.name);
    //       if (res?.data?.name) {
    //         dispatch(setUsername(res?.data?.name));
    //       }
    //     } catch (error) {
    //       console.log(error, error);
    //     }
    //   }
    // };
    dispatch(login());
    // authMe();
  }, []);

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default Router;
