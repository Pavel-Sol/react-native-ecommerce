import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Slices } from "@app/constants/slices";
import { CategoryType } from "@app/types/product";
import { fetchCategories } from "../asyncActions";

type initialStateT = {
  offset: number;
  limit: number;
  category: null | number;
  categories: CategoryType[];
};

const initialState: initialStateT = {
  offset: 0,
  limit: 12,
  category: 1,
  categories: [],
};

export const productFilterSlice = createSlice({
  name: Slices.productFilter,
  initialState,
  reducers: {
    setOffset(state, { payload }: PayloadAction<number>) {
      state.offset = payload;
    },
    setCategory(state, { payload }: PayloadAction<number | null>) {
      state.offset = 0;
      state.category = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const { setOffset, setCategory } = productFilterSlice.actions;

export default productFilterSlice.reducer;
