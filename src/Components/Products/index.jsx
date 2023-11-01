import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import productsSlice from "../../store/products";
import cartSlice from "../../store/cart";

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

function Products() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(cartSlice.actions.addtoCart(product));
  }
  
  return (
    <Grid container spacing={2}>
      {products.map((product, index) => (
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
