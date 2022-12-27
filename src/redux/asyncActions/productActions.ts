import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVICE_API } from "@app/api";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async ({ params, category }: { params: string; category: number }, thunkAPI) => {
    try {
      const response = await SERVICE_API.ProductAPI.fetchProducts({ params, category });

      return response.data;
    } catch (error) {
      console.log("error product/fetchProducts thunk => ", error);
      return thunkAPI.rejectWithValue("не удалось загрузить товары");
    }
  }
);

export const getProduct = createAsyncThunk("product/getProduct", async (id: number, thunkAPI) => {
  try {
    const response = await SERVICE_API.ProductAPI.getProduct(id);

    return response.data;
  } catch (error) {
    console.log("error product/fetchProducts thunk => ", error);
    return thunkAPI.rejectWithValue("не удалось загрузить товар");
  }
});

export const fetchCategories = createAsyncThunk("product/fetchCategories", async (_, thunkAPI) => {
  try {
    const response = await SERVICE_API.CategoryAPI.fetchCategories();

    return response.data;
  } catch (error) {
    console.log("error product/fetchCategories thunk => ", error);
    return thunkAPI.rejectWithValue("не удалось загрузить категории");
  }
});
