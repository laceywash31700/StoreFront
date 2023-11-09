import React, { useState } from 'react';
import { Typography, TextField, Grid } from "@mui/material";;

const Checkout = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  const handleCreditCardNumberChange = (e) => {
    setCreditCardNumber(e.target.value);
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Billing Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="full-name"
            label="Full Name"
            variant="outlined"
            fullWidth
            value={fullName}
            onChange={handleFullNameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={handleAddressChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            label="City"
            variant="outlined"
            fullWidth
            value={city}
            onChange={handleCityChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="state"
            label="State"
            variant="outlined"
            fullWidth
            value={state}
            onChange={handleStateChange}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            id="zip-code"
            label="Zip Code"
            variant="outlined"
            fullWidth
            value={zipCode}
            onChange={handleZipCodeChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="credit-card-number"
            label="Credit Card Number"
            variant="outlined"
            fullWidth
            value={creditCardNumber}
            onChange={handleCreditCardNumberChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="expiration-date"
            label="Expiration Date"
            variant="outlined"
            fullWidth
            value={expirationDate}
            onChange={handleExpirationDateChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="cvv"
            label="CVV"
            variant="outlined"
            fullWidth
            value={cvv}
            onChange={handleCvvChange}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Checkout;

