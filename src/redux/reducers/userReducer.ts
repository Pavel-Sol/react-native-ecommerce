import { createSlice } from "@reduxjs/toolkit";
import { authMe } from "@app/redux/asyncActions";
import { Slices } from "@app/constants/slices";

type initialStateT = {
  username: string;
};

const initialState: initialStateT = {
  username: "",
};

export const userSlice = createSlice({
  name: Slices.user,
  initialState,
  reducers: {
    logOut(state) {
      state.username = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authMe.fulfilled, (state, action) => {
      state.username = action.payload.name;
    });
    builder.addCase(authMe.rejected, (state) => {
      state.username = "";
    });
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
