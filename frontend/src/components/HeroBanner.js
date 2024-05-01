import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Home_Hero from "../assets/images/Home_Hero.jpg";

const HeroBanner = () => {
  return (
    <Box
      position="relative"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Fusion
      </Typography>
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography lineHeight="35px" mb="2px">
        Check out the most effective excercises and products
      </Typography>
      <Button variant="contained" color="error" href="#excercises" 
      sx={{
        backgroundColor: '#ff2625', padding: '10px'
      }}>
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
      <img src={Home_Hero} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
