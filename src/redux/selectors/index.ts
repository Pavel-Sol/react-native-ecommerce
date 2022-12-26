import { RootState } from "../store";

export const usernameSelector = (state: RootState) => state.user.username;

export const productSelector = (state: RootState) => state.product.product;
export const productsPartSelector = (state: RootState) => state.product.productsPart;
export const loadingSelector = (state: RootState) => state.product.loading;

export const offsetSelector = (state: RootState) => state.productFilter.offset;
export const limitSelector = (state: RootState) => state.productFilter.limit;
export const categorySelector = (state: RootState) => state.productFilter.category;
export const categoriesSelector = (state: RootState) => state.productFilter.categories;
export const cardsInRowSelector = (state: RootState) => state.productFilter.cardsInRow;

export const cartListSelector = (state: RootState) => state.cart.cartList;
