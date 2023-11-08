import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  Typography,
  Button,
  // ...other MUI components
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import cartSlice from "../../store/cart";
import { updateProduct } from "../../store/products";

function ProductDetails() {
  const { productId } = useParams(); // Get the product ID from the URL params
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === parseInt(productId))
  );
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(updateProduct({ product, quantity: 1 }));
    dispatch(cartSlice.actions.addToCart({ ...product, quantity: 1 }));
  };

  if (!product) {
    // Handle the case where the product with the given ID is not found
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <Carousel style={{ width: "100%", overflow: "hidden" }}>
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index}`}
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
            }}
          />
        ))}
      </Carousel>
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" gutterBottom>
          Price: ${product.price.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToCart}
          style={{ marginRight: "10px" }}
        >
          Add to Cart
        </Button>
        <Link to="/">
          <Button variant="contained"  color="primary">Back to Products</Button>
        </Link>
      </CardContent>
    </div>
  );
}

export default ProductDetails;
