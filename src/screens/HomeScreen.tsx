import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { fetchProducts } from "@app/redux/asyncActions";
import { setOffset } from "@app/redux/reducers/productFilterReducer";
import { setCartList } from "@app/redux/reducers/cartReducer";
import { ProductType } from "@app/types/product";
import { Card } from "@app/components/cards";
import { LS } from "@app/utils";
import { Colors } from "@app/constants/colors";
import { CardSkeleton } from "@app/components/skeletons/cardSceleton copy";

export const HomeScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const productsPart = useAppSelector((state) => state.product.productsPart);
  const loading = useAppSelector((state) => state.product.loading);
  const [products, setProducts] = useState<ProductType[]>([]);
  const offset = useAppSelector((state) => state.productFilter.offset);
  const limit = useAppSelector((state) => state.productFilter.limit);
  const category = useAppSelector((state) => state.productFilter.category);
  // console.log("offset => ", offset);

  useEffect(() => {
    const loadCartListFromLS = async () => {
      const jsonCartListFromLS = await LS.getItem("cartList");
      const cartListFromLS = JSON.parse(jsonCartListFromLS);
      dispatch(setCartList(cartListFromLS));
    };

    loadCartListFromLS();
  }, []);

  const loadMoreHandler = () => {
    const updatedOffset = offset + limit;
    dispatch(setOffset(updatedOffset));
  };

  useEffect(() => {
    let params = `?offset=${offset}&limit=${limit}`;
    if (offset === 0) setProducts([]);

    dispatch(fetchProducts({ params, category }));
  }, [offset, category]);

  useEffect(() => {
    setProducts([...products, ...productsPart]);
  }, [productsPart]);

  const renderLoader = () => {
    if (!loading) {
      return null;
    }
    return (
      <View style={s.loaderWrapper}>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </View>
    );
  };

  return (
    <View style={s.container}>
      <TouchableOpacity onPress={() => navigation.navigate("filter")} style={s.filtersButton}>
        <Text style={s.filtersButtonText}>Filters</Text>
        <FontAwesome name="filter" size={24} color={Colors.primary} />
      </TouchableOpacity>

      <View style={s.cardList}>
        <FlatList
          data={products}
          renderItem={({ item }) => <Card item={item} />}
          // keyExtractor={(item) => item.id}
          horizontal={false}
          numColumns={2}
          ListFooterComponent={renderLoader}
          onEndReached={loadMoreHandler}
          onEndReachedThreshold={0.2}
        />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  filtersButton: {
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: 20,
    marginBottom: 15,
  },
  filtersButtonText: {
    marginRight: 10,
    color: Colors.primary,
  },

  cardList: {
    paddingBottom: 40,
  },

  loaderWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 16,
    paddingBottom: 50,
  },
});
