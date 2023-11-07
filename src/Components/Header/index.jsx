import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "../Cart";
import Search from "../Search";
import Login from "../Login";
import { Button } from "@mui/material";
import Settings from "../Settings/Index";
import categorySlice from "../../store/category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Settings />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Login />
          <Button onClick={handleModalOpen}>
            <ShoppingCartIcon style={{ fontSize: 36 }} />
          </Button>
        </div>
      </div>
      <Cart open={isModalOpen} handleClose={handleModalClose} />
      <Search />
      <div
        className="header"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {buttons.map((category) => (
          <Button key={category} onClick={() => handleChange(category)}>
            {category}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Header;
