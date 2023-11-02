import React from "react";
import { useSelector } from "react-redux";
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

function Cart({ open, handleClose }) {
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Checkout</DialogTitle>
      <DialogContent>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {cartItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={item.title} src={item.thumbnail} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={item.description}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
        <hr />
        {/* Calculate total and display it here if needed */}
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
