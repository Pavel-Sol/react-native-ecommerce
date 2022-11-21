import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { fetchProducts } from "@app/redux/asyncActions";
import { setOffset } from "@app/redux/reducers/productFilterReducer";
import { ProductType } from "@app/types/product";

export const HomeScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.user.username);
  const productsPart = useAppSelector((state) => state.product.productsPart);
  const [products, setProducts] = useState<ProductType[]>([]);
  const offset = useAppSelector((state) => state.productFilterReducer.offset);
  const limit = useAppSelector((state) => state.productFilterReducer.limit);
  const category = useAppSelector((state) => state.productFilterReducer.category);
  console.log("offset => ", offset);

  const loadMoreHandler = () => {
    const updatedOffset = offset + limit;
    dispatch(setOffset(updatedOffset));
  };

  useEffect(() => {
    let params = `?offset=${offset}&limit=${limit}`;
    if (offset === 0) setProducts([]);

    // console.log("params ", params);
    dispatch(fetchProducts({ params, category }));
  }, [offset, category]);

  useEffect(() => {
    setProducts([...products, ...productsPart]);
  }, [productsPart]);

  const Item = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("productDetail", { productId: item.id })}
        style={s.itemWrapper}>
        <Image
          style={s.image}
          source={{
            uri: item.images[0],
          }}
        />

        <View style={s.textContent}>
          {/* <Text>{item.title}</Text> */}
          <Text style={s.price}>{item.price} рублей</Text>
          <Text style={s.price}>{item.category.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderLoader = () => {
    return (
      <View style={s.loaderWrapper}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  };

  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text>HomeScreen!!!</Text>
        {username && <Text>{username}</Text>}

        <TouchableOpacity onPress={() => navigation.navigate("auth")} style={s.button}>
          <Text>Go To login</Text>
        </TouchableOpacity>
      </View>

      <View style={s.cardList}>
        <FlatList
          data={products}
          renderItem={Item}
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
  cardList: {
    paddingBottom: 40,
  },

  button: {
    backgroundColor: "green",
    padding: 17,
    margin: 10,
    borderRadius: 5,
    fontSize: 18,
    width: 180,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },

  itemWrapper: {
    // flexDirection: "row",
    width: "50%",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },

  image: {
    width: 60,
    height: 60,
    // marginRight: 30,
  },

  textContent: {
    justifyContent: "space-around",
  },

  price: {
    fontSize: 20,
  },
  loaderWrapper: {
    paddingTop: 16,
    paddingBottom: 200,
  },
});
