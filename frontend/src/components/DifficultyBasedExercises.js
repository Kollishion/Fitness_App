import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchExcercises from "./SearchExcercises";

const DifficultyBasedExercises = ({ difficultyLevel }) => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/exercises/getAll"
        );
        setExercises(
          response.data.filter(
            (exercise) => exercise.difficultyLevel === difficultyLevel
          )
        );
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchExercises();
  }, [difficultyLevel]);

  const Root = styled("div")({
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    background: "linear-gradient(to right, #8e9eab, #eef2f3)",
    marginTop: "20vh",
    position: "relative",
  });

  const StyledCard = styled(Card)({
    width: 220,
    height: 400, // Ensures all cards are the same height
    borderRadius: 20,
    overflow: "hidden",
    color: "#616161",
    boxShadow:
      "0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)",
    cursor: "pointer",
    transition: "transform .2s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  });

  const CardHeader = styled("div")({
    height: 200,
    display: "grid",
    placeItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  });

  const CardContentWrapper = styled(CardContent)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%", // Use full width of the card
    height: "150px", // Ensure fixed height for content
    justifyContent: "space-between", // Distribute space evenly
  });

  const Title = styled(Typography)({
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 16,
    margin: "10px 0",
  });

  const Text = styled(Typography)({
    textAlign: "center",
    fontSize: 12,
    margin: "10px 0",
  });

  const StyledButton = styled(Button)({
    border: "none",
    borderRadius: 100,
    padding: "5px 30px",
    color: "#fff",
    marginBottom: 15,
    textTransform: "uppercase",
    background: "#616161", // Add background color for visibility
  });

  return (
    <Root>
      <SearchExcercises />
      {exercises.map((exercise) => (
        <StyledCard key={exercise.id}>
          <CardHeader
            style={{ backgroundImage: `url(${exercise.imageUrl})` }}
          ></CardHeader>
          <CardContentWrapper>
            <Title>{exercise.title}</Title>
            <Text>{exercise.instructions}</Text>
            <Text>Difficulty: {exercise.difficultyLevel}</Text>
          </CardContentWrapper>
        </StyledCard>
      ))}
    </Root>
  );
};

export default DifficultyBasedExercises;
