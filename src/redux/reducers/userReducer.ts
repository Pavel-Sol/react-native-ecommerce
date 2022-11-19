import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginDtoType, UserType } from "@app/types/user";
import { AuthAPI } from "@app/api/authApi";
import { LS } from "@app/utils";

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

    const response = await AuthAPI.authMe({
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
    const response = await AuthAPI.login(payload);
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
  name: "user",
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