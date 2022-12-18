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

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={s.top}>
        <Image
          style={s.userImg}
          //  source={{
          //    uri: ImagesAssets.noUser,
          //  }}
          source={ImagesAssets.noUser}
        />
      </View>
      <View style={s.middle}>
        <DrawerItemList {...props} />
      </View>
      <View style={s.bottom}>
        <DrawerItem
          label="Login"
          onPress={() => navigation.navigate("auth")}
          icon={() => <Entypo name="login" size={24} color={Colors.basicGray} />}
          labelStyle={{ marginLeft: -20 }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const s = StyleSheet.create({
  top: {
    flex: 0.1,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },

  middle: {
    flex: 0.7,
  },
  userImg: {
    width: 60,
    height: 60,
  },

  bottom: {
    flex: 0.2,
    borderTopWidth: 1,
    borderColor: Colors.basicGray,
  },
});
