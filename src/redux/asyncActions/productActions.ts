import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVICE_API } from "@app/api";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async ({ params, category }: { params: string; category: number }, thunkAPI) => {
    try {
      const response = await SERVICE_API.ProductAPI.fetchProducts({ params, category });
      //  console.log("product/fetchProducts", response.data);

      return response.data;
    } catch (error) {
      console.log("error product/fetchProducts thunk => ", error);
      return thunkAPI.rejectWithValue("не удалось загрузить товары");
    }
  }
);