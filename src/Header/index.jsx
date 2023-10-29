import React from "react";
import Cart from "../Cart";
import Search from "../Search";
import SettingsSideBar from "../Settings";


const Header = () => {

  return (
    <>
      <Login />
      <Search/>
      <SettingsSideBar/>
      <div style={{ padding: '20px' }}>
      <h1>Shopping Cart</h1>
      {/* Display cart items here */}
      <button onClick={handleModalOpen}>Open Checkout</button>
      <Cart open={isModalOpen} handleClose={handleModalClose} cartItems={cartItems} />
    </div>
    </>
  );
};

export default Header;
