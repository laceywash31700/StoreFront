import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import cartSlice from "../../store/cart";
``
function Cart({ open, handleClose }) {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (id, quantity) => {
    dispatch(cartSlice.actions.removeFromCart({ id, quantity }));
  };
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Checkout</DialogTitle>
      <DialogContent>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {cartItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={item.title} src={item.thumbnail} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={item.description}
                  secondaryTypographyProps={{ component: "div" }}
                >
                  Quantity: {item.quantity} <br />
                  Price: ${item.price.toFixed(2)}
                </ListItemText>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleRemoveFromCart(item.id, 1)}
                >
                  Remove
                </Button>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>

        <hr />

        <Typography variant="h6" gutterBottom>
          Total: ${total.toFixed(2)}
        </Typography>
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
