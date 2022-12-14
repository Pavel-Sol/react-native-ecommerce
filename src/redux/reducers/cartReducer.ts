import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Slices } from "@app/constants/slices";
import { ProductType } from "@app/types/product";

type initialStateT = {
  cartList: ProductType[];
};

const initialState: initialStateT = {
  cartList: [],
};

export const cartSlice = createSlice({
  name: Slices.cart,
  initialState,
  reducers: {
    setCartList(state, { payload }: PayloadAction<ProductType[]>) {
      state.cartList = payload;
    },
  },
});

export const { setCartList } = cartSlice.actions;

export default cartSlice.reducer;
