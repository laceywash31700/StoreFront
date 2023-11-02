import React, { useState } from "react";
import Header from "../Components/Header";
import Products from "../Components/Products";
// {
// "id": 2,
// "title": "iPhone X",
// "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
// "price": 899,
// "discountPercentage": 17.94,
// "rating": 4.44,
// "stock": 34,
// "brand": "Apple",
// "category": "smartphones",
// "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
// "images": [
//   "https://i.dummyjson.com/data/products/2/1.jpg",
//   "https://i.dummyjson.com/data/products/2/2.jpg",
//   "https://i.dummyjson.com/data/products/2/3.jpg",
//   "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
// ]
// }

export const ProductContext = React.createContext({});

function Home() {
  const [sortWord, setSortWord] = useState("all");
  const [displayCount, setDisplayCount] = useState(8);

  return (
    <>
      <ProductContext.Provider value={{
        displayCount,
        setDisplayCount,
        sortWord,
        setSortWord
      }}>
        <Header />
        <Products />
      </ProductContext.Provider>
    </>
  );
}

export default Home;
