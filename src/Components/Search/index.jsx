import React, { useState } from "react";
import { Select, MenuItem, FormControl } from "@mui/material";

function Search() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl fullWidth variant="outlined" style={{ marginBottom: "20px" }}>
      <Select
        value={selectedValue}
        onChange={handleChange}
        label="Select an option"
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="option1">electronics</MenuItem>
        <MenuItem value="option2">food</MenuItem>
        <MenuItem value="option3">Health & Beauty</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Search;
