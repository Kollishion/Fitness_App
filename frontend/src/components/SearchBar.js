import React from "react";
import { TextField, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"; // MUI search icon

const SearchForm = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "transparent",
        padding: "8px",
        borderRadius: "4px"
      }}
      className="search-container"
    >
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Search for products, equipments and supplements"
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "red", 
            borderWidth: "2px"
          },
          "& .MuiInputBase-input::placeholder": {
            color: "white",
            opacity: 1
          },
          "& .MuiInputBase-input": {
            caretColor: "white"
          }
        }}
        InputProps={{
          endAdornment: (
            <IconButton
              aria-label="search"
              component="a" // This can be a Link or a navigation action
              href="#"
            >
              <SearchIcon style={{ color: "red", backgroundColor: "white",
            borderRadius: "50%" }} />
            </IconButton>
          ),
        }}
        id="search-bar"
      />
    </Box>
  );
};

export default SearchForm;
