import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import logo_dark from "../assets/images/logo_dark.jpg";
import SearchBar from "./SearchBar";
import { CiShoppingCart } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "../stylesheets/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  useGSAP(() => {
    gsap.from(".logo", {
      y: -150,
      duration: 1,
      delay: 0.5,
      opacity: 0,
    });
    gsap.from(".overlay", {
      y: -150,
      duration: 0.5,
      delay: 0.2,
      opacity: 0,
    });
  });

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
      <Link to="/" style={{ order: 1 }}>
        <img
          src={logo_dark}
          alt="FitnessFusion"
          style={{
            width: "100px",
            height: "90px",
            marginRight: "20px",
          }}
          className="logo"
        />
      </Link>

      <Stack order={{ xs: 2, sm: 2 }}>
        <SearchBar />
      </Stack>

      <Stack
        direction="row"
        gap="20px"
        mr="10px"
        fontSize={{ xs: "16px", sm: "24px" }}
        alignItems="flex-end"
        mt={{ xs: "10px", sm: "0px" }}
        order={{ xs: 3, sm: 3 }}
      >
        <Button
          component={Link}
          to="/Login"
          sx={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "#FF2625",
            padding: "2px 18px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "all 0.3s", // Smooth transition for hover effects
            "&:hover": {
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
            fontSize: "18px",
            textDecoration: "none",
            color: "#FF2625",
            cursor: "pointer",
            transition: "all 0.3s",
            backgroundColor: "white",
            borderRadius: "30%",
            "&:hover": {
              backgroundColor: "antiquewhite", // Change color on hover
            },
          }}
        >
          <CiShoppingCart />
        </Button>
        {isOpen ? (
          <MdCancel className="link_bar" onClick={handleClick} />
        ) : (
          <GiHamburgerMenu className="link_bar" onClick={handleClick} />
        )}
      </Stack>

      {isOpen && (
        <div className="overlay">
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            gap="20px"
          >
            <Link to="/" className="overlay-link" onClick={handleClick}>
              Home
            </Link>
            <Link to="/about" className="overlay-link" onClick={handleClick}>
              About
            </Link>
            <Link to="/contact" className="overlay-link" onClick={handleClick}>
              Contact
            </Link>
          </Stack>
        </div>
      )}
    </Stack>
  );
};

export default Navbar;
