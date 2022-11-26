import { createSlice } from "@reduxjs/toolkit";
import { Slices } from "@app/constants/slices";
import { ProductType } from "@app/types/product";
import { fetchProducts, getProduct } from "@app/redux/asyncActions";

type initialStateT = {
  productsPart: ProductType[];
  product: ProductType | null;
};

const initialState: initialStateT = {
  productsPart: [],
  product: null,
};

export const productSlice = createSlice({
  name: Slices.product,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productsPart = action.payload;
    });

    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export default productSlice.reducer;
