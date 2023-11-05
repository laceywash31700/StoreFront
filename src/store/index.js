import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products";
import cartSlice from "./cart";
import categorySlice from "./category";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    category: categorySlice.reducer
  },
});
