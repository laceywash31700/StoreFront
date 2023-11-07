import React, { useState } from "react";
import Header from "../Components/Header";
import Products from "../Components/Products";

export const ProductContext = React.createContext({});

function Home() {
  const [displayCount, setDisplayCount] = useState(8);

  return (
    <>
      <ProductContext.Provider value={{
        displayCount,
        setDisplayCount,
      }}>
        <Header />
        <Products />
      </ProductContext.Provider>
    </>
  );
}

export default Home;
