import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import data from "../assets/data/data.json";

const url = import.meta.env.VITE_API_URL;

export const getProducts = createAsyncThunk(
  "GET/products",
  async (category) => {
    let config = { baseURL: `${url}`, method: "get" };
    if (category === "all") {
      config.url = `/products`;
    } else {
      config.url = `/products/category/${category}`;
    }
    let response = await axios(config);
    return response.data.products;
  }
);

export const updateProduct = createAsyncThunk(
  "PUT/product/:id",
  async ( product, amount ) => {
    const updatedProduct = { ...product, stock: (product.stock - amount) };
    const config = {
      baseURL: `${url}`,
      url: `/products/${product.id}`,
      method: `post`,
      header: { "Content-Type": "application/json" },
      data: updatedProduct,
    };
    let response = await axios(config);
    return response.data;
  }
);

// const products = data.products;

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
