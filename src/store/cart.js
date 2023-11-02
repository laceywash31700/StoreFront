import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addtoCart: (state, action) => {
        console.log('action', action);
      state.cart = [...state.cart, action.payload];
      
    },
  },
});

export default cartSlice;
