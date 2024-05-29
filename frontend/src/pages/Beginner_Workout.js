import React, { useEffect, useState } from "react";
import Workout_links from "../components/WorkoutLinks";
import axios from "axios";

const Beginner_Workout = () => {
  const ExerciseList = ({ category }) => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
      const fetchExercises = async () => {
        try {
          const response = await axios.get(
            "http://localhost:8080/exercises/getAll"
          );
          setExercises(response.data);
        } catch (error) {
          console.error("Error fetching exercises:", error);
        }
      };

      fetchExercises();
    }, []);

    const filteredExercises = exercises.filter(
      (exercise) => exercise.difficultyLevel === "0"
    );
  };
  return (
    <div>
      <Workout_links />
    </div>
  );
};

export default Beginner_Workout;
