import React from 'react';
import {Select,MenuItem,FormControl} from "@mui/material"

function Search() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  
  return (
    <FormControl fullWidth variant="outlined" style={{ marginBottom: '20px' }}>
    <Select
      value={selectedValue}
      onChange={handleChange}
      label="Select an option"
    >
      <MenuItem value="">None</MenuItem>
      <MenuItem value="option1">Option 1</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
      <MenuItem value="option3">Option 3</MenuItem>
    </Select>
  </FormControl>
  )
}

export default Search;