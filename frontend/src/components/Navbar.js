import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Stack,
  Button
} from "@mui/material";
import Logo_Dark from "../assets/images/Logo_Dark.png";
import SearchBar from "./SearchBar";
import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      flexWrap="wrap"
      top={0}
      right={0}
      left={0}
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
            padding: "2px 18px",
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
        <Button
          component={Link}
          to="/checkout"
          sx={{
            fontSize: "20px",
            textDecoration: "none",
            color: "#FF2625",
            cursor: "pointer",
            transition: "all 0.3s", // Smooth transition for hover effects
            backgroundColor: "white",
            borderRadius: "30%",
            "&:hover": {
              // Hover properties
              backgroundColor: "antiquewhite", // Change color on hover
            },
          }}
        >
          <CiShoppingCart />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
