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
        backgroundColor: "white",
        padding: "8px",
        borderRadius: "4px",
        maxWidth: "50vw",
      }}
      className="search-container"
    >
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Search for products, equipments, and supplements"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "transparent", // Ensure outline is transparent by default
            },
            "&:hover fieldset": {
              borderColor: "transparent", // Avoid outline on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent", // Avoid outline on focus
            },
          },
          "& .MuiInputBase-input::placeholder": {
            color: "darkred",
            opacity: 1,
          },
          "& .MuiInputBase-input": {
            caretColor: "black",
          },
        }}
        InputProps={{
          endAdornment: (
            <IconButton aria-label="search">
              <SearchIcon
                style={{
                  color: "red",
                  backgroundColor: "ivory",
                  borderRadius: "50%",
                  fontSize: "32px",
                }}
              />
            </IconButton>
          ),
        }}
        id="search-bar"
      />
    </Box>
  );
};

export default SearchForm;
