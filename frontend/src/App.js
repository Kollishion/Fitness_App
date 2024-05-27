import React, { useState } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShopCart from "./components/ShopCart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import DifficultyBasedExercises from "./components/DifficultyBasedExercises";
import "./App.css";
import Workout from "./components/Workout";

const App = () => {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/Login";
  const isExerciseDetailRoute = location.pathname === "/exerciseDetail";
  const isAdvanced = location.pathname === "/advanced";
  const isIntermediate = location.pathname === "/intermediate";
  const isBeginner = location.pathname === "/beginner";

  const shouldShowNavbar = !isLoginRoute;
  const shouldShowFooter =
    !isLoginRoute &&
    !isBeginner &&
    !isIntermediate &&
    !isAdvanced &&
    !isExerciseDetailRoute;

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {shouldShowNavbar && <Navbar />}
      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/exerciseDetail" element={<ExerciseDetail />} />
          <Route
            path="/beginner"
            element={<DifficultyBasedExercises difficultyLevel="0" />}
          />
          <Route
            path="/intermediate"
            element={<DifficultyBasedExercises difficultyLevel="1" />}
          />
          <Route
            path="/advanced"
            element={<DifficultyBasedExercises difficultyLevel="2" />}
          />
          <Route path="/cart/:id" element={<ShopCart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Workout" element={<Workout />} />
        </Routes>
      </Box>
      {shouldShowFooter && <Footer />}
    </Box>
  );
};

export default App;
