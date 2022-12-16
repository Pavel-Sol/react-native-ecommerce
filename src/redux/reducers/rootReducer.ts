import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import productFilterReducer from "./productFilterReducer";
import cartReducer from "./cartReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  productFilter: productFilterReducer,
  cart: cartReducer,
});
