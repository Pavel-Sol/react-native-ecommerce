import { createSlice } from "@reduxjs/toolkit";
import { Slices } from "@app/constants/slices";
import { ProductType } from "@app/types/product";
import { fetchProducts } from "@app/redux/asyncActions";

type initialStateT = {
  productsPart: ProductType[];
};

const initialState: initialStateT = {
  productsPart: [],
};

export const productSlice = createSlice({
  name: Slices.product,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productsPart = action.payload;
    });
  },
});

export default productSlice.reducer;
