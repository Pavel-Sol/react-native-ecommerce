import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LS } from "@app/utils";
import { Slices } from "@app/constants";
import { ProductType } from "@app/types/product";
import { SERVICE_API } from "@app/api";

type initialStateT = {
  productsPart: ProductType[];
};

const initialState: initialStateT = {
  productsPart: [],
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (params: string, thunkAPI) => {
    try {
      const response = await SERVICE_API.ProductAPI.fetchProducts(params);
      //  console.log("product/fetchProducts", response.data);

      return response.data;
    } catch (error) {
      console.log("error product/fetchProducts thunk => ", error);
      return thunkAPI.rejectWithValue("не удалось загрузить товары");
    }
  }
);

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
