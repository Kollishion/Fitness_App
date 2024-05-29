import React, { useState, useRef } from "react";
import { Box, Tooltip, styled } from "@mui/material";
import { VscDebugStart } from "react-icons/vsc";
import { FaRegPauseCircle } from "react-icons/fa";
import { MdRestartAlt } from "react-icons/md";
import TimerThirty from "../components/timers/TimerThirty";
import TimerFifteen from "../components/timers/TimerFifteen";

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
