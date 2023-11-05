import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async ({ category, subCategory }) => {
      let config = {
        baseURL: url,
        method: "get",
      };
      if (category === "All Products") {
        config.url = "/products";
      } else {
        config.url = `/products/category/${subCategory}`;
      }
      const response = await axios(config);
      return response.data.products;
    } 
);


export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ product, amount }) => {
    try {
      const updatedStock = (product.stock - amount);
      console.log(updatedStock);
      let config = {
        baseURL: url,
        method: "put",
        url:`/products/${product.id}`,
        header:  { 'Content-Type': 'application/json'},
        data: { stock: updatedStock }
      };
      const response = await axios(config);
      console.log(response.data); 
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);


const productsSlice = createSlice({
  name: "products",
  initialState: { products:[],  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(updateProduct.fulfilled, (state,action) => {
        const updatedProduct = action.payload;
        const index = state.products.findIndex((product)=> product.id === updatedProduct.id);
        state.products[index] = updatedProduct;
      })
  }
});

export default productsSlice;
