import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import data from "../assets/data/data.json";

const products = data.products;

const productsSlice = createSlice({
  name: "products",
  initialState: { products },
});

export default productsSlice;
