import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "../Cart";
import Search from "../Search";
import Login from "../Login";
import { Button } from "@mui/material";
import Settings from "../Settings/Index";
import categorySlice from "../../store/category";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categories = useSelector((state) => state.category.categories);
  const buttons = Object.keys(categories);
  const dispatch = useDispatch();
  
  const handleChange = (cat) => {
    dispatch(categorySlice.actions.changeCategory(cat));
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Login />
      <Settings />
      <div style={{ padding: "20px" }}>
        <h1>Shopping Cart</h1>
        {/* Display cart items here */}
        <Button onClick={handleModalOpen}>Open Checkout</Button>
        <Cart open={isModalOpen} handleClose={handleModalClose} />
      </div> 
      <Search />
      <div className="header">
      {buttons.map((category) => (
        <Button
          key={category}
          onClick={() => handleChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
    </>
  );
};

export default Header;
