import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./DrawerNavigator";
import { useAppDispatch } from "@app/hooks";
import { authMe } from "@app/redux/reducers/authReducer";

const Router = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authMe());
  }, []);

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default Router;
