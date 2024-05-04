import React from "react";
import { Box, Typography, Button } from "@mui/material";
import hero_2 from "../assets/images/hero_2.jpg";

const HeroBanner = () => {
  return (
    <Box position="relative" width="100%" height="100dvh">
      <Box
        position="absolute"
        display="flex"
        flexDirection="column"
        sx={{ top: "60%", left: "50%", transform: "translate(-50%, -50%)" }}
        textAlign="center"
      >
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
          Fitness Fusion
        </Typography>
        <Typography
          fontWeight="700"
          color="#F0F8FF"
          sx={{
            fontSize: { lg: "44px", xs: "40px" },
            background: "linear-gradient(#eee, red)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography
          lineHeight="35px"
          mb="2px"
          sx={{
            background: "linear-gradient(gray, red)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Check out the most effective excercises and products
        </Typography>
        <Button
          variant="contained"
          color="error"
          href="#excercises"
          sx={{
            backgroundColor: "#ff2625",
            padding: "5px",
            width: "30%",
            position: "absolute",
            cursor: "pointer",
            zIndex: "2",
            top: "50%",
            left: "35%",
          }}
        >
          Explore Excercises
        </Button>
        <Box
          fontWeight="600"
          color="#ff2625"
          sx={{
            opacity: "0.1",
            display: { lg: "block", xs: "none" },
          }}
          fontSize="170px"
          style={{ lineHeight: "unset" }}
        >
          Excercise
        </Box>
      </Box>
      <img src={hero_2} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
