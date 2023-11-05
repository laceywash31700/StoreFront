import { createSlice } from "@reduxjs/toolkit";

const categories = new Map();

categories.set("food", ["groceries"]);
categories.set("home", ["home-decoration", "furniture", "lighting"]);
categories.set("health", ["fragrances", "skincare"]);
categories.set("auto", ["automotive", "motorcycle"]);
categories.set("clothing", [
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
]);
categories.set("electronics", ["smartphones", "laptops"]);
categories.set("all", [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
]);




const categorySlice = createSlice({
  name: "category",
  initialState:{
    categories,
    selectedCategory: "all"
} ,
  reducers: {
    changeCategory: (state,action) =>{
        state.selectedCategory = action.payload
    }  }

});

export default categorySlice;