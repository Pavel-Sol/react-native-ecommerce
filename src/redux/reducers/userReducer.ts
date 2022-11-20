import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginDtoType, UserType } from "@app/types/user";
import { LS } from "@app/utils";
import { Slices } from "@app/constants";
import { SERVICE_API } from "@app/api";

type initialStateT = {
  username: string;
};

const initialState: initialStateT = {
  username: "",
};

export const authMe = createAsyncThunk<UserType, undefined>("user/authMe", async (_, thunkAPI) => {
  try {
    // const token = await LS.getItem("token");
    const token = await LS.getItem("token");

    // console.log("createAsyncThunk token from ls", token);

    const response = await SERVICE_API.UserAPI.authMe({
      Authorization: "Bearer " + token,
    });

    console.log("createAsyncThunk userData.data", response.data);

    return response.data;
  } catch (e) {
    if (e.message === "ошибка авторизации") {
      LS.removeItem("token");
    }

    console.log("createAsyncThunk ошибка ", e.message);
    return thunkAPI.rejectWithValue("ошибка авторизации");
  }
});

export const login = createAsyncThunk("user/login", async (payload: LoginDtoType, thunkAPI) => {
  try {
    const response = await SERVICE_API.UserAPI.login(payload);
    console.log("user/login", response?.data?.access_token);

    const token = response?.data?.access_token;
    if (token) {
      LS.setItem("token", token);
      thunkAPI.dispatch(authMe());
      return null;
    }
  } catch (error) {
    console.log("error user/login thunk => ", error);
  }
});

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
