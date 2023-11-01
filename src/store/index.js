import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products";
import cartSlice from "./cart";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer
  },
});
