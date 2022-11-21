import { createSlice } from "@reduxjs/toolkit";
import { authMe } from "@app/redux/asyncActions";
import { Slices } from "@app/constants";

type initialStateT = {
  username: string;
};

const initialState: initialStateT = {
  username: "",
};

export const userSlice = createSlice({
  name: Slices.user,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authMe.fulfilled, (state, action) => {
      state.username = action.payload.name;
    });
    builder.addCase(authMe.rejected, (state) => {
      state.username = "";
    });
  },
});

export default userSlice.reducer;
