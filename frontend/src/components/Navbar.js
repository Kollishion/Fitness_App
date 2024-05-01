import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Stack,
  Button,
  TextField,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LocationOn, Search } from "@mui/icons-material";
import { keyframes } from "@emotion/react";
import Logo_Dark from "../assets/images/Logo_Light.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      position="relative"
      flexWrap="wrap"
      sx={{
        gap: { xs: "20px" },
        mt: "2px",
        px: "20px"
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

      {/* Rendering Home link */}
      <Stack
        direction="row"
        gap="20px"
        mr="10px"
        fontSize={{ xs: "16px", sm: "24px" }}
        alignItems="flex-end"
        mt={{ xs: "10px", sm: "0px" }}
        order={{ xs: 2, sm: 2 }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
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
            color: "#3A1212",
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
            color: "#3A1212",
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
