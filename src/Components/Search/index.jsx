import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, MenuItem, FormControl } from "@mui/material";
import categorySlice from "../../store/category";
import { getProducts } from "../../store/products";

function Search() {
  const categories = useSelector((state) => state.category.categories);
  const selectedCategory = useSelector((state) => state.category.selectedCategory);
  const selectedSubCategory = useSelector((state) => state.category.selectedSubCategory)
  const subCategories = categories[selectedCategory] || []; 
  const dispatch = useDispatch();
;

  
  const handleChange = (event) => {
    dispatch(categorySlice.actions.changeSubCategory(event.target.value));
  };

  useEffect(() => {
    dispatch(getProducts({ category: selectedCategory, subCategory: selectedSubCategory }));
  }, [selectedCategory,selectedSubCategory]);



  return (
    <FormControl fullWidth variant="outlined" style={{ marginBottom: "20px" }}>

      <Select value={'all'} onChange={handleChange} label="Select an option">
        {subCategories.map((subCategory) => <MenuItem key={subCategory}value={subCategory}>{subCategory}</MenuItem>)}
      </Select>
    </FormControl>
  );
}

export default Search;
