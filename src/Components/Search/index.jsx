import React, { useEffect, useContext } from "react";
import { Select, MenuItem, FormControl } from "@mui/material";
import { ProductContext } from "../../Home";

// displayCount,
// setDisplayCount,


function Search() {
  const { sortWord, setSortWord } = useContext(ProductContext);

  const handleChange = (event) => {
    setSortWord(event.target.value);
  };

  useEffect(() => {
    console.log('Updated sortWord:', sortWord);
  }, [sortWord]); 


  return (
    <FormControl fullWidth variant="outlined" style={{ marginBottom: "20px" }}>
      <Select value={sortWord} onChange={handleChange} label="Select an option">
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="electronics">Electronics</MenuItem>
        <MenuItem value="food">Food</MenuItem>
        <MenuItem value="health">Health & Beauty</MenuItem>
        <MenuItem value="home">Home & Decor</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Search;
