import React, { useState } from "react";
import Cart from "../Cart";
import Search from "../Search";
import Login from "../Login";
import { Button } from "@mui/material";
import Settings from "../Settings/Index";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Login />
      <Search />
      <Settings />
      <div style={{ padding: "20px" }}>
        <h1>Shopping Cart</h1>
        {/* Display cart items here */}
        <Button onClick={handleModalOpen}>Open Checkout</Button>
        <Cart open={isModalOpen} handleClose={handleModalClose} />
      </div>
    </>
  );
};

export default Header;
