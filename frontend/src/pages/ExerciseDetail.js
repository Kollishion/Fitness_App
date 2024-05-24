import { Link } from "react-router-dom";
import { Box, Grid } from "@mui/material";
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

const ImageBox = styled(Box)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const ExerciseDetail = () => {
  return (
    <Grid
      container
      direction="column"
      style={{ height: "180vh", marginTop: "15vh" }}
    >
      <Link to="/beginner" style={{ textDecoration: "none" }}>
        <StyledGrid item>
          <ImageBox component="img" src={beginner} alt="Beginner" />
        </StyledGrid>
      </Link>
      <Link to="/intermediate" style={{ textDecoration: "none" }}>
        <StyledGrid item>
          <ImageBox component="img" src={intermediate} alt="Intermediate" />
        </StyledGrid>
      </Link>
      <Link to="/advanced" style={{ textDecoration: "none" }}>
        <StyledGrid item>
          <ImageBox component="img" src={advanced} alt="Advanced" />
        </StyledGrid>
      </Link>
    </Grid>
  );
};

export default ExerciseDetail;
