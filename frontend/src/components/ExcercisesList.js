import React, { useState, useEffect } from "react";
import axios from "axios";
import TimerThirty from "./timers/TimerThirty";
import TimerFifteen from "./timers/TimerFifteen";
const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    // Define a function to fetch exercises from the API
    const fetchExercises = async () => {
      try {
        // Make a GET request to your Spring Boot API
        const response = await axios.get(
          "http://localhost:8080/exercises/getAll"
        );
        // Set the fetched exercises in the state
        setExercises(response.data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    // Call the fetchExercises function when the component mounts
    fetchExercises();

    // Cleanup function
    return () => {
      // Any cleanup code goes here
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <h2>Exercise List</h2>
      <TimerThirty />
      <TimerFifteen />
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            <h3>{exercise.title}</h3>
            <img src={exercise.imageurl} alt={exercise.title} />
            <p>{exercise.instructions}</p>
            <p>Difficulty: {exercise.difficultyLevel}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
