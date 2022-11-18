import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { UserType } from "types/user";

type initialStateT = {
  username: string;
};

const initialState: initialStateT = {
  username: "",
};

export const login = createAsyncThunk<string, undefined>("auth/login", async (_, thunkAPI) => {
  try {
    const token = await AsyncStorage.getItem("token");
    console.log("createAsyncThunk token from ls", token);

    const userData = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    console.log("createAsyncThunk userData.data", userData);

    return userData?.data?.username;
  } catch (e) {
    console.log("createAsyncThunk ошибка ", e);
    return thunkAPI.rejectWithValue("ошибка авторизации");
  }
});

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.username = action.payload;
    });
  },
});

export const { setUsername } = authSlice.actions;

export default authSlice.reducer;
