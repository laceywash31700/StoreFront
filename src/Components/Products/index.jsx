import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import cartSlice from "../../store/cart";
import { ProductContext } from "../../Home";

function Products() {
  const category = new Map();

  category.set("food", ["groceries"]);
  category.set("home", ["home-decoration"]);
  category.set("health", ["fragrances", "skincare"]);
  category.set("electronics", ["smartphones", "laptops"]);
  category.set("all", [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
  ]);
  const { sortWord } = useContext(ProductContext);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(cartSlice.actions.addtoCart(product));
  };

  const filteredProducts = products.filter((product) => {
    let allowedCategories = category.get(sortWord);
    return allowedCategories && allowedCategories.includes(product.category);
  });

  return (
    <Grid container spacing={2}>
      {filteredProducts.map((product, index) => (
        <Grid item xs={3} key={index}>
          <Card
            variant="outlined"
            style={{ marginBottom: "10px", width: "100%" }}
            sx={{
              border: "2px solid #ccc",
              borderRadius: "4px",
              padding: "10px",
            }}
          >
            <Carousel style={{ width: "100%", overflow: "hidden" }}>
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product ${index}`}
                  style={{
                    width: "100%",
                    maxHeight: "200px",
                    objectFit: "cover",
                  }}
                />
              ))}
            </Carousel>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Price: ${product.price.toFixed(2)}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Rating: {product.rating}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
