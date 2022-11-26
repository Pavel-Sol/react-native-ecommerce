import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Image, TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { ProductType } from "@app/types/product";
import { Colors } from "@app/constants/colors";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface ICardProps {
  item: ProductType;
}

export const Card = ({ item }: ICardProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

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

        <AntDesign name="hearto" size={24} color={Colors.primary} style={s.iconLike} />

        <View style={s.textContent}>
          <Text style={s.title}>{item.title}</Text>
          <View style={s.bottom}>
            <View>
              <Text style={s.price}>$ {item.price}</Text>
              <Text style={s.categoryName}>{item.category.name}</Text>
            </View>

            <AntDesign name="pluscircle" size={44} color={Colors.primary} />
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
});
