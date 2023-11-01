import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

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

// likely to have a state that is in the redux state
function Cart({ open, handleClose, cartItems }) {
  // const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Checkout</DialogTitle>
      <DialogContent>
        {/* Display cart items */}
        {/* {cartItems.map((item, index) => (
          <div key={index}>
            <p>
              {item.name}: ${item.price.toFixed(2)}
            </p>
          </div>
        ))} */}
        <hr />
        {/* <p>Total: ${total.toFixed(2)}</p> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
        <Button onClick={handleClose} color="primary">
          Checkout
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Cart;
