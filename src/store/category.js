import { createSlice } from "@reduxjs/toolkit";

const categories = {
  Food: {
    subCategory: ["groceries"],
    image:
      "https://cdn-s3.thevarsity.ca/2021/12/ARTS-celebs_and_fast_food-COURTESY_OF_TIM_HORTONS-web.jpg",
    description: 'Indulge in Culinary Delights! Explore a World of Flavors at our Online Food Store. Fresh Ingredients, Gourmet Treats, and Delicious Snacks Await You. Experience the Joy of Cooking with Premium Quality Products. Order Now and Savor Every Bite!'
  },
  "Health & Beauty": {
    subCategory: ["fragrances", "skincare"],
    image: "https://media.allure.com/photos/5ad89c87b4825822d6ef7528/master/w_1600%2Cc_limit/cvs-beauty-in-real-life-01.jpg",
    description: "Rediscover Your Beauty! Discover a Range of Skincare, Haircare, and Wellness Products at our Health and Beauty Store. Unleash the Glow Within You with Our High-Quality Cosmetics and Wellness Essentials. Pamper Yourself, You Deserve It! Shop Now and Glow Naturally!"
  },
  Electronics: {
    subCategory: ["smartphones", "laptops"],
    image: "https://i.pinimg.com/originals/87/49/38/874938e9ed5b042b0bda910dc8a1d84d.jpg",
    description: "Upgrade Your Lifestyle! Experience the Future with Our Cutting-Edge Electronics Store. From Smartphones to Home Gadgets, Dive into the World of Innovation. Stay Connected, Stay Entertained, Stay Ahead of the Game. Elevate Your Tech Game Today. Discover Limitless Possibilities!"
  },

  Auto: {
    subCategory: ["automotive", "motorcycle"],
    image: "https://nypost.com/wp-content/uploads/sites/2/2019/04/female-auto-worker.jpg?quality=75&strip=all",
    description: "Rev Up Your Ride! Upgrade Your Vehicle with the Latest Auto Accessories and Parts. From Stylish Interiors to High-Performance Engines, We've Got Everything Your Car Desires. Drive in Style, Drive with Confidence! Enhance Your Journey Today, Visit Our Auto Store."
  },
  Home: {
    subCategory: ["home-decoration", "furniture", "lighting"],
    image: "https://i.pinimg.com/736x/c4/f8/8f/c4f88f2ae73ad5f00b874e7ae3db2d0d.jpg",
    description: "Transform Your Space! Elevate Your Home with Exquisite Decor Pieces from Our Home Decor Store. From Elegant Furniture to Artisanal Accents, Create a Haven Reflecting Your Style. Every Corner Deserves a Touch of Elegance. Redefine Your Living Space, Shop Now and Let Your Home Tell Your Story!"
  },

  Clothing: {
    subCategory: [
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
    ],
    image: "https://www.alioze.com/wp-content/uploads/2020/09/Lacoste-mise-sur-lexcellence.jpg",
    description: "Fashion Redefined! Step into a World of Fashion at Our Clothing Store. From Trendy Tops to Elegant Dresses, We Have Styles for Every Occasion. Embrace Your Unique Fashion Sense and Make a Statement Wherever You Go. Be Stylish, Be Confident, Be You! Explore Our Latest Collections Now."
  },
  "All Products": { 
    subCategory: [],
    image: '',
  }
};

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories,
    selectedCategory: "All Products",
    selectedSubCategory: "",
  },
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
