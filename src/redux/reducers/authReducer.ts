import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserType } from "@app/types/user";
import AuthAPI from "@app/api/authApi";

type initialStateT = {
  username: string;
};

const initialState: initialStateT = {
  username: "",
};

export const authMe = createAsyncThunk<UserType, undefined>("auth/login", async (_, thunkAPI) => {
  try {
    const token = await AsyncStorage.getItem("token");
    // console.log("createAsyncThunk token from ls", token);

    const response = await AuthAPI.authMe({
      Authorization: "Bearer " + token,
    });

    console.log("createAsyncThunk userData.data", response.data);

    return response.data;
  } catch (e) {
    if (e.message === "ошибка авторизации") {
      AsyncStorage.removeItem("token");
    }

    console.log("createAsyncThunk ошибка ", e.message);
    return thunkAPI.rejectWithValue("ошибка авторизации");
  }
});

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authMe.fulfilled, (state, action) => {
      state.username = action.payload.name;
    });
    // builder.addCase(authMe.rejected, (state, action) => {
    //   state.username = action.payload.name;
    // });
  },
});

export default authSlice.reducer;
