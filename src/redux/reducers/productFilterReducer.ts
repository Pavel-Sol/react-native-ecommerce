import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Slices } from "@app/constants";

type initialStateT = {
  offset: number;
  limit: number;
};

const initialState: initialStateT = {
  offset: 0,
  limit: 12,
};

export const productFilterSlice = createSlice({
  name: Slices.productFilter,
  initialState,
  reducers: {
    setOffset(state, { payload }: PayloadAction<number>) {
      state.offset = payload;
    },
  },
});

export const { setOffset } = productFilterSlice.actions;

export default productFilterSlice.reducer;
