import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "@app/constants/colors";

export const CartScreen = () => {
  const cartList = useAppSelector((state) => state.cart.cartList);
  // console.log("cartList", cartList);

  return (
    <ScrollView style={s.container}>
      {!!cartList.length &&
        cartList.map((item) => (
          <View key={item.id} style={s.cartItem}>
            <Image
              resizeMode={"cover"}
              style={s.cartItemImg}
              source={{
                uri: item.images[0],
              }}
            />

            <View style={s.cartItemRight}>
              <Text style={s.cartItemTitle}>{item.title}</Text>

              <View style={s.row}>
                <View style={s.counter}>
                  <TouchableOpacity>
                    <AntDesign name="pluscircle" size={34} color={Colors.primary} />
                  </TouchableOpacity>
                  <View style={s.count}>
                    <Text>{item.count}</Text>
                  </View>
                  <TouchableOpacity>
                    <AntDesign name="minuscircle" size={34} color={Colors.primary} />
                  </TouchableOpacity>
                </View>
                <Text style={s.cartItemPrice}>$ {item.price * item.count}</Text>
              </View>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};

const s = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.lightDark,
  },
  cartItem: {
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: Colors.white,
    borderRadius: 6,
  },

  cartItemImg: {
    width: 100,
    height: 100,
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
  },

  cartItemRight: {
    flex: 1,
    padding: 5,
    justifyContent: "space-between",
  },

  cartItemTitle: {
    fontSize: 16,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  counter: {
    flexDirection: "row",
    paddingBottom: 10,
    paddingLeft: 10,
  },
  count: {
    minWidth: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  cartItemPrice: {},
});
