import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateT = {
  username: string;
};

const initialState: initialStateT = {
  username: "",
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export const { setUsername } = authSlice.actions;

export default authSlice.reducer;
