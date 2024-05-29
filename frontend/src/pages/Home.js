import React, { useRef } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import Video_animation from "../components/Video_animation";
import Testimonials from "../components/Testimonials";
import Item from "../components/carasoul/Item";
const Home = () => {
  const videoRef = useRef(null);

  return (
    <Box>
      <HeroBanner />
      <Video_animation ref={videoRef} />
      <Item />
      <Testimonials />
    </Box>
  );
};

export default Home;
