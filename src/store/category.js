import { createSlice } from "@reduxjs/toolkit";

const categories = {
    Food: ["groceries"],
    Health: ["fragrances", "skincare"],
    Electronics: ["smartphones", "laptops"],
    Auto: ["automotive", "motorcycle"],
    Home: ["home-decoration", "furniture", "lighting"],
    Clothing: [
      "tops",
      "womens-dresses",
      "womens-shoes",
      "mens-shirts",
      "mens-shoes",
      "mens-watches",
      "womens-watches",
      "womens-bags",
      "womens-jewellery",
      "sunglasses"
    ],
    "All Products": [
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
      "lighting"
    ]
  };
  

const categorySlice = createSlice({
  name: "category",
  initialState:{
    categories,
    selectedCategory: "All Products",
    selectedSubCategory: ""
} ,
reducers: {
    changeCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.selectedSubCategory = null;
    },
    changeSubCategory: (state, action) => {
      state.selectedSubCategory = action.payload;
    },
  },
});


export default categorySlice;