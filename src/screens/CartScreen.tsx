import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "@app/constants/colors";
import { LS } from "@app/utils";
import { ProductType } from "@app/types/product";
import { setCartList } from "@app/redux/reducers/cartReducer";
import { cartListSelector } from "@app/redux/selectors";

export const CartScreen = () => {
  const dispatch = useAppDispatch();
  const cartList = useAppSelector(cartListSelector);
  const totalPrice = cartList.reduce((acc, item) => acc + item.count * item.price, 0);

  const handleIncreaseCount = async (product: ProductType) => {
    const jsonCartListFromLS = await LS.getItem("cartList");
    const cartListFromLS = JSON.parse(jsonCartListFromLS);
    const match = cartListFromLS.find((item: ProductType) => item.id === product.id);

    if (match) {
      const updatedCartList = cartListFromLS.map((item: ProductType) => {
        if (item.id === match.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });

      dispatch(setCartList(updatedCartList));
      LS.setItem("cartList", JSON.stringify(updatedCartList));
    }
  };

  const handleDecreaseCount = async (product: ProductType) => {
    const jsonCartListFromLS = await LS.getItem("cartList");
    const cartListFromLS = JSON.parse(jsonCartListFromLS);
    const match = cartListFromLS.find((item: ProductType) => item.id === product.id);

    if (match && match.count > 1) {
      const updatedCartList = cartListFromLS.map((item: ProductType) => {
        if (item.id === match.id) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });

      dispatch(setCartList(updatedCartList));
      LS.setItem("cartList", JSON.stringify(updatedCartList));
    }
  };

  const handleDeleteItem = async (product: ProductType) => {
    const jsonCartListFromLS = await LS.getItem("cartList");
    const cartListFromLS = JSON.parse(jsonCartListFromLS);
    const match = cartListFromLS.find((item: ProductType) => item.id === product.id);

    if (match) {
      const updatedCartList = cartListFromLS.filter((item: ProductType) => item.id !== match.id);

      dispatch(setCartList(updatedCartList));
      LS.setItem("cartList", JSON.stringify(updatedCartList));
    }
  };

  if (cartList.length === 0) {
    return (
      <View style={s.cartEmpty}>
        <Text style={s.cartEmptyText}>Nothing has been added to the cart yet !</Text>
      </View>
    );
  }

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
              <View style={s.row}>
                <Text style={s.cartItemTitle}>{item.title}</Text>
                <TouchableOpacity onPress={() => handleDeleteItem(item)}>
                  <AntDesign name="delete" size={24} color={Colors.basicGray} />
                </TouchableOpacity>
              </View>

              <View style={s.row}>
                <View style={s.counter}>
                  <TouchableOpacity onPress={() => handleDecreaseCount(item)}>
                    <AntDesign name="minuscircle" size={34} color={Colors.primary} />
                  </TouchableOpacity>
                  <View style={s.count}>
                    <Text>{item.count}</Text>
                  </View>
                  <TouchableOpacity onPress={() => handleIncreaseCount(item)}>
                    <AntDesign name="pluscircle" size={34} color={Colors.primary} />
                  </TouchableOpacity>
                </View>

                <Text style={s.cartItemPrice}>$ {item.price * item.count}</Text>
              </View>
            </View>
          </View>
        ))}

      <View style={s.totalRow}>
        <Text style={s.totalTitle}>Total:</Text>
        <Text style={s.totalPrice}>$ {totalPrice}</Text>
      </View>
    </ScrollView>
  );
};

const s = StyleSheet.create({
  cartEmpty: {
    marginTop: 30,
    alignItems: "center",
  },

  cartEmptyText: {
    fontSize: 20,
    fontWeight: "600",
    borderBottomWidth: 2,
    borderColor: Colors.primary,
  },

  container: {
    padding: 10,
    backgroundColor: Colors.lightDark,
  },
  cartItem: {
    flexDirection: "row",
    marginBottom: 15,
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
    paddingRight: 10,
    paddingBottom: 10,
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
    paddingLeft: 10,
  },
  count: {
    minWidth: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  cartItemPrice: {
    alignSelf: "flex-end",
  },

  totalRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  totalTitle: {
    fontSize: 20,
    color: Colors.basicGray,
    fontWeight: "700",
    marginRight: 10,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "700",
  },
});
