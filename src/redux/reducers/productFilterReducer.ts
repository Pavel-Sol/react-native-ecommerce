import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Slices } from "@app/constants/slices";
import { CategoryType } from "@app/types/product";
import { fetchCategories } from "../asyncActions";

type initialStateT = {
  offset: number;
  limit: number;
  category: null | number;
  categories: CategoryType[];
  cardsInRow: number;
};

const initialState: initialStateT = {
  offset: 0,
  limit: 12,
  category: 2,
  categories: [],
  cardsInRow: 2,
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
    setCardsInRow(state, { payload }: PayloadAction<number>) {
      state.cardsInRow = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const { setOffset, setCategory, setCardsInRow } = productFilterSlice.actions;

export default productFilterSlice.reducer;
