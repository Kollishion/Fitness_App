import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Stack,
  Button
} from "@mui/material";
import Logo_Dark from "../assets/images/Logo_Dark.png";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      flexWrap="wrap"
      sx={{
        gap: { xs: "20px" },
        mt: "2px",
        px: "20px",
        zIndex: 1000,
      }}
    >
      {/* Rendering Logo */}
      <Link to="/" style={{ order: 1 }}>
        <img
          src={Logo_Dark}
          alt="FitnessFusion"
          style={{
            width: "100px",
            height: "90px",
            marginRight: "20px",
          }}
        />
      </Link>
      <Stack order={{ xs: 2, sm: 2 }}>
        <SearchBar />
      </Stack>
      {/* Rendering Home link */}
      <Stack
        direction="row"
        gap="20px"
        mr="10px"
        fontSize={{ xs: "16px", sm: "24px" }}
        alignItems="flex-end"
        mt={{ xs: "10px", sm: "0px" }}
        order={{ xs: 3, sm: 3 }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#FFFFF0",
            borderBottom: activeLink === "home" ? "3px solid #FF2625" : "none",
          }}
          onClick={() => setActiveLink("home")}
        >
          Home
        </Link>
        <a
          href="#about"
          style={{
            textDecoration: "none",
            color: "#FFFFF0",
            borderBottom: activeLink === "about" ? "3px solid #FF2625" : "none",
          }}
          onClick={() => setActiveLink("about")}
        >
          About
        </a>
        <a
          href="#contact"
          style={{
            textDecoration: "none",
            color: "#FFFFF0",
            borderBottom:
              activeLink === "contact" ? "3px solid #FF2625" : "none",
          }}
          onClick={() => setActiveLink("contact")}
        >
          Contact
        </a>
        <Button
          component={Link}
          to="/login"
          sx={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "#FF2625",
            padding: "2.8px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "all 0.3s", // Smooth transition for hover effects
            "&:hover": {
              // Hover properties
              backgroundColor: "#E24A40", // Change color on hover
            },
          }}
        >
          Login
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
