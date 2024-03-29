import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { getProduct } from "@app/redux/asyncActions";
import { DrawerStackParams } from "@app/types/navigations";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { Slider } from "@app/components/slider/Slider";
import { Colors } from "@app/constants/colors";
import { ButtonPrimary } from "@app/components/button/ButtonPrimary";
import { ProductType } from "@app/types/product";
import { LS } from "@app/utils";
import { setCartList } from "@app/redux/reducers/cartReducer";
import { DetailSkeleton } from "@app/components/loaders/DetailSkeleton";
import { cartListSelector, loadingSelector, productSelector } from "@app/redux/selectors";

type ProductDetailScreenProps = NativeStackScreenProps<DrawerStackParams, "productDetail">;

export const ProductDetailScreen = ({ route, navigation }: ProductDetailScreenProps) => {
  const dispatch = useAppDispatch();
  const productId = route.params.productId;
  const product = useAppSelector(productSelector);
  const loading = useAppSelector(loadingSelector);
  const cartList = useAppSelector(cartListSelector);

  const matchInCart = cartList.find((elem) => elem.id === product?.id);

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [productId]);

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

  const handleNavigateToCart = () => {
    navigation.navigate("cart");
  };

  if (loading) {
    return <DetailSkeleton />;
  }

  return (
    <View style={s.container}>
      <Slider data={product?.images} />

      <Text style={s.title}>{product?.title}</Text>
      <Text style={s.price}>$ {product?.price}</Text>
      <Text style={s.description}>{product?.description}</Text>

      <View style={s.buttonCardWrapper}>
        {matchInCart ? (
          <ButtonPrimary onPress={handleNavigateToCart}>go to cart</ButtonPrimary>
        ) : (
          <ButtonPrimary onPress={() => handleAddToCart(product)}>add to cart</ButtonPrimary>
        )}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  title: {
    marginTop: 20,
    fontSize: 25,
  },

  price: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: "700",
  },

  description: {
    marginTop: 15,
    fontSize: 17,
    color: Colors.basicGray,
  },

  buttonCardWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 25,
  },
});
