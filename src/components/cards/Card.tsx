import React from "react";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { AntDesign } from "@expo/vector-icons";
import { Image, TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { ProductType } from "@app/types/product";
import { Colors } from "@app/constants/colors";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LS } from "@app/utils";
import { setCartList } from "@app/redux/reducers/cartReducer";
import { cartListSelector } from "@app/redux/selectors";

interface ICardProps {
  item: ProductType;
}

export const Card = ({ item }: ICardProps) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const cartList = useAppSelector(cartListSelector);
  const matchInCart = cartList.find((elem) => elem.id === item.id);

  const handleAddToCart = async (product: ProductType) => {
    const jsonCartListFromLS = await LS.getItem("cartList");
    const cartListFromLS = JSON.parse(jsonCartListFromLS);
    const match = cartListFromLS.find((item: ProductType) => item.id === product.id);

    if (match) {
      cartListFromLS.forEach((item: ProductType) => {
        match.id === item.id ? (item.count += 1) : null;
      });

      dispatch(setCartList(cartListFromLS));
      LS.setItem("cartList", JSON.stringify(cartListFromLS));
    } else {
      const productWithCount = { ...product, count: 1 };

      dispatch(setCartList([...cartListFromLS, productWithCount]));
      LS.setItem("cartList", JSON.stringify([...cartListFromLS, productWithCount]));
    }
  };

  return (
    <View style={s.itemWrapper}>
      <TouchableOpacity
        onPress={() => navigation.navigate("productDetail", { productId: item.id })}
        style={s.itemContent}>
        <Image
          resizeMode={"cover"}
          style={s.image}
          source={{
            uri: item.images[0],
          }}
        />

        <View style={s.textContent}>
          <Text style={s.title}>{item.title}</Text>
          <View style={s.bottom}>
            <View>
              <Text style={s.price}>$ {item.price}</Text>
              <Text style={s.categoryName}>{item.category.name}</Text>
            </View>

            <TouchableOpacity style={s.cartButton} onPress={() => handleAddToCart(item)}>
              <AntDesign name="shoppingcart" size={34} color={Colors.primary} />
              {matchInCart && <Text style={s.cartCount}>{matchInCart.count}</Text>}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  itemWrapper: {
    width: "50%",
    paddingHorizontal: 8,
    paddingVertical: 16,
  },

  itemContent: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 6,
    flex: 1,
    position: "relative",
  },

  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },

  textContent: {
    paddingHorizontal: 7,
    paddingBottom: 8,
    flex: 1,
  },

  title: {
    paddingTop: 10,
    fontWeight: "600",
    flexGrow: 1,
    marginBottom: 10,
  },

  price: {
    fontSize: 19,
  },

  categoryName: {
    color: Colors.basicGray,
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  iconLike: {
    position: "absolute",
    top: 7,
    right: 7,
  },

  cartButton: {
    position: "relative",
  },

  cartCount: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: Colors.dark,
    color: Colors.white,
    fontSize: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 10,
  },
});
