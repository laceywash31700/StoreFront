import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: []},
  reducers: {
    addtoCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === id
      );
    
      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex].quantity += quantity;
      } else {
        state.cart.push({ ...action.payload, quantity });
      }
    },
    removeFromCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === id
      );
      if (existingProductIndex !== -1) {
        const existingQuantity = state.cart[existingProductIndex].quantity;
        if (existingQuantity > quantity) {
          state.cart[existingProductIndex].quantity -= quantity;
        } else {
          state.cart.splice(existingProductIndex, 1);
        }
      }
    },
  },
});

export default cartSlice;
