import React, { useEffect, forwardRef, useRef } from "react";
import { Box } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FitnessFusion from "../assets/Video/FitnessFusion.mp4";
gsap.registerPlugin(ScrollTrigger);

const Video_animation = forwardRef((_, ref) => {
  useEffect(() => {
    const videoElement = ref.current;

    gsap.fromTo(
      videoElement,
      { scale: 0 },
      {
        scale: 0.9,
        rotate: 360,
        scrollTrigger: {
          trigger: videoElement,
          scroller: "body",
          start: "top 90%", // Start the animation when the top of the video is at the center of the viewport
          end: "bottom 60%", // End the animation when the bottom of the video is at the top of the viewport
          scrub: 3, // Smooth scrolling effect
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.killAll();
    };
  }, [ref]);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
      }}
    >
      <video
        ref={ref}
        src={FitnessFusion}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      ></video>
    </Box>
  );
});

export default Video_animation;
