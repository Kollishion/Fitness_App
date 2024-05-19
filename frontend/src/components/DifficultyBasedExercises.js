import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Paper } from "@mui/material";

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

  return (
    <div>
      <h2>Exercises</h2>
      <Grid container spacing={2}>
        {exercises.map((exercise) => (
          <Grid item key={exercise.id} xs={12} sm={6} md={4}>
            <Paper>
              <h3>{exercise.title}</h3>
              <img src={exercise.imageUrl} alt={exercise.title} />
              <p>{exercise.instructions}</p>
              <p>Difficulty: {exercise.difficultyLevel}</p>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DifficultyBasedExercises;
