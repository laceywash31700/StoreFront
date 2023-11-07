import React, { useState, useMemo, useEffect,useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardContent, Typography, Grid, Button, Pagination } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import cartSlice from "../../store/cart";
import { ProductContext } from "../../Home";
import {updateProduct} from "../../store/products";


function Products() {
 
  const { displayCount } = useContext(ProductContext);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1); 

  const startIdx = useMemo(() => {
    return (page - 1) * displayCount;
  }, [page, displayCount]);

  const endIdx = useMemo(() => {
    return startIdx + displayCount;
  }, [startIdx, displayCount]);

  

  useEffect(() => {
    let pages = Math.floor(products.length / displayCount);
    pages += products.length % displayCount !== 0 ? 1 : 0;
    setCount(pages);
  }, [displayCount, products]);

  const handleAddToCart = (product) => {
    dispatch(updateProduct({ product, quantity: 1 }));
    console.log(product);
    dispatch(cartSlice.actions.addtoCart({ ...product, quantity: 1 }));
};


  const handleChange = (e, page) => {
    setPage(page);
  };

  return (
    <>
      <Grid container spacing={2}>
        {products.slice(startIdx, endIdx).map((product, index) => (
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
      <Typography
        sx={{ display: "flex", justifyContent: "center", marginTop: "5px" }}
      >
        Page: {page}
      </Typography>
      <Pagination 
        sx={{ display: "flex", justifyContent: "center", marginTop: "5px" }}
        count={count}
        variant="outlined"
        color="primary"
        onChange={handleChange}
      />
    </>
  );
}

export default Products;
