import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import beginner from "../assets/images/beginner.png";
import intermediate from "../assets/images/intermediate.png";
import advanced from "../assets/images/advanced.png";

const StyledGrid = styled(Grid)(({ theme }) => ({
  height: "55.5vh",
  width: "95%",
  margin: "10px auto",
  borderRadius: "20px",
  overflow: "hidden",
  position: "relative",
  boxShadow: theme.shadows[3],
  cursor: "pointer",
}));

const OverlayText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#fff",
  fontSize: "2rem",
  fontWeight: "bold",
  textShadow: "0 0 10px rgba(0, 0, 0, 0.7)",
}));

const ImageBox = styled(Box)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const ExerciseDetail = () => {
  return (
    <Grid container direction="column" style={{ height: "180vh" }}>
      <StyledGrid item>
        <ImageBox component="img" src={beginner} alt="Beginner" />
      </StyledGrid>
      <StyledGrid item>
        <ImageBox component="img" src={intermediate} alt="Intermediate" />
      </StyledGrid>
      <StyledGrid item>
        <ImageBox component="img" src={advanced} alt="Intermediate" />
      </StyledGrid>
    </Grid>
  );
};

export default ExerciseDetail;
