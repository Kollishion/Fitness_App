import React, { useRef } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import Video_animation from "../components/Video_animation";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";

const Home = () => {
  const videoRef = useRef(null);

  return (
    <Box>
      <HeroBanner />
      <Video_animation ref={videoRef} />
      <Testimonials />
      <Pricing />
    </Box>
  );
};

export default Home;
