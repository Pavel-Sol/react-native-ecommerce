import { ImagesAssets } from "@app/assets/imageAssets";
import { Colors } from "@app/constants/colors";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { logOut } from "@app/redux/reducers/userReducer";
import { LS } from "@app/utils";

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { navigation } = props;

  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.user.username);
  const userPhotoSrc = username
    ? {
        uri: "https://livedemo00.template-help.com/wordpress_49080/wp-content/uploads/2014/04/04.jpg",
      }
    : ImagesAssets.noUser;

  const handleLogOut = () => {
    dispatch(logOut());
    LS.removeItem("token");
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={s.top}>
        <Image style={s.userImg} source={userPhotoSrc} />
        {username && <Text style={s.userName}>{username}</Text>}
      </View>
      <View style={s.middle}>
        <DrawerItemList {...props} />
      </View>
      <View style={s.bottom}>
        {username ? (
          <DrawerItem
            onPress={handleLogOut}
            label="Logout"
            icon={() => <Entypo name="login" size={24} color={Colors.basicGray} />}
            labelStyle={{ marginLeft: -20 }}
          />
        ) : (
          <DrawerItem
            onPress={() => navigation.navigate("auth")}
            label="Signin"
            icon={() => <Entypo name="login" size={24} color={Colors.basicGray} />}
            labelStyle={{ marginLeft: -20 }}
          />
        )}
      </View>
    </DrawerContentScrollView>
  );
};

const s = StyleSheet.create({
  top: {
    flex: 0.1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: "row",
  },

  middle: {
    flex: 0.7,
  },
  userImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  userName: {
    marginLeft: 20,
    paddingTop: 30,
    fontSize: 18,
  },

  bottom: {
    flex: 0.2,
    borderTopWidth: 1,
    borderColor: Colors.basicGray,
    paddingTop: 15,
  },
});
