import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Box, Tooltip, styled } from "@mui/material";
import { VscDebugStart } from "react-icons/vsc";
import { FaRegPauseCircle } from "react-icons/fa";
import { MdRestartAlt } from "react-icons/md";
import TimerThirty from "../components/timers/TimerThirty";
import TimerFifteen from "../components/timers/TimerFifteen";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// DifficultyBasedExercises Component

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
    height: 400,
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
    width: "100%",
    height: "150px",
    justifyContent: "space-between",
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
    background: "#616161",
  });

  return (
    <Root>
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

// WorkoutLinks Component

const Sidebar = styled(Box)({
  width: "5vw",
  height: "100vh",
  position: "fixed",
  backgroundColor: "#212121",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const SidebarIcon = styled(Box)({
  padding: "5vh 0",
  cursor: "pointer",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "#525252",
    transition: "0.5s",
  },
});

const Main = styled(Box)({
  marginLeft: "5vw",
  width: "calc(100% - 5vw)",
  height: "100vh",
  backgroundColor: "white",
  color: "black",
  overflowY: "scroll",
});

const TopSection = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "20%",
});

const BottomSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "80%",
});

const exerciseData = {
  Beginner: [
    {
      day: "Monday",
      title: "Upper Body Strength",
      exercises: [
        { name: "Bench Press", sets: 4, reps: "8-12" },
        { name: "Dumbbell Shoulder Press", sets: 3, reps: "10" },
        { name: "Lat Pulldown", sets: 3, reps: "12" },
        { name: "Barbell Curls", sets: 3, reps: "10" },
        { name: "Tricep Dips", sets: 3, reps: "12" },
      ],
      warmup: "5 minutes of light cardio",
      cooldown: "5-10 minutes of stretching",
    },
    // Add more days...
  ],
  Intermediate: [
    // Add Intermediate workouts...
  ],
  Advanced: [
    // Add Advanced workouts...
  ],
};

const ExerciseList = ({ category }) => {
  const exercises = exerciseData[category];

  return (
    <div>
      {exercises.map((exerciseDay) => (
        <Box key={exerciseDay.day} sx={{ marginBottom: "2rem" }}>
          <h2>
            {exerciseDay.day}: {exerciseDay.title}
          </h2>
          <p>
            <strong>Warm-up:</strong> {exerciseDay.warmup}
          </p>
          <ul>
            {exerciseDay.exercises.map((exercise, index) => (
              <li key={index}>
                <h3>{exercise.name}</h3>
                <p>
                  Sets: {exercise.sets}, Reps: {exercise.reps}
                </p>
              </li>
            ))}
          </ul>
          <p>
            <strong>Cool Down:</strong> {exerciseDay.cooldown}
          </p>
        </Box>
      ))}
    </div>
  );
};

const WorkoutLinks = () => {
  const [category, setCategory] = useState("Beginner");
  const timerThirtyRef = useRef(null);
  const timerFifteenRef = useRef(null);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleStartTimers = () => {
    timerThirtyRef.current.start();
    timerFifteenRef.current.start();
  };

  const handlePauseTimers = () => {
    timerThirtyRef.current.pause();
    timerFifteenRef.current.pause();
  };

  const handleResetTimers = () => {
    timerThirtyRef.current.reset();
    timerFifteenRef.current.reset();
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        fontFamily: "sans-serif",
        scrollBehavior: "smooth",
      }}
    >
      <Sidebar>
        <Tooltip title="Beginner">
          <SidebarIcon onClick={() => handleCategoryChange("Beginner")}>
            Beginner
          </SidebarIcon>
        </Tooltip>
        <Tooltip title="Intermediate">
          <SidebarIcon onClick={() => handleCategoryChange("Intermediate")}>
            Intermediate
          </SidebarIcon>
        </Tooltip>
        <Tooltip title="Advanced">
          <SidebarIcon onClick={() => handleCategoryChange("Advanced")}>
            Advanced
          </SidebarIcon>
        </Tooltip>
        <Tooltip title="Start">
          <SidebarIcon onClick={handleStartTimers}>
            <VscDebugStart size={24} color="#f5ae16" />
          </SidebarIcon>
        </Tooltip>
        <Tooltip title="Pause">
          <SidebarIcon onClick={handlePauseTimers}>
            <FaRegPauseCircle size={24} color="#f5ae16" />
          </SidebarIcon>
        </Tooltip>
        <Tooltip title="Restart">
          <SidebarIcon onClick={handleResetTimers}>
            <MdRestartAlt size={24} color="#f5ae16" />
          </SidebarIcon>
        </Tooltip>
      </Sidebar>
      <Main component="main">
        <TopSection>
          <Box component="span">
            <Box component="h1" sx={{ fontSize: "3rem", margin: 0 }}>
              {category} Workouts
            </Box>
          </Box>
        </TopSection>
        <BottomSection>
          <ExerciseList category={category} />
          <DifficultyBasedExercises difficultyLevel={category} />
          <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
            <TimerThirty ref={timerThirtyRef} />
            <TimerFifteen ref={timerFifteenRef} />
          </div>
        </BottomSection>
      </Main>
    </Box>
  );
};

export default WorkoutLinks;
