import { createSlice } from "@reduxjs/toolkit";
import { Slices } from "@app/constants/slices";
import { ProductType } from "@app/types/product";
import { fetchProducts, getProduct } from "@app/redux/asyncActions";

type initialStateT = {
  productsPart: ProductType[];
  product: ProductType | null;
  loading: boolean;
};

const initialState: initialStateT = {
  productsPart: [],
  product: null,
  loading: false,
};

export const productSlice = createSlice({
  name: Slices.product,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productsPart = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
    });

    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
  },
});

export default productSlice.reducer;
