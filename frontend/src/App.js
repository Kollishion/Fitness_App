import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
import Logout from "./pages/Logout";
import Details from "./components/details/Details";
import Beginner_Workout from "./pages/Beginner_Workout";
import Intermediate_Workout from "./pages/Intermediate_Workout";
import Advanced_Workout from "./pages/Advanced_Workout";

const App = ({ isLoggedIn }) => {
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
          {!isLoggedIn && <Route path="/" element={<Home />} />}
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
          <Route path="/logout" element={<Logout />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/beginner_workout" element={<Beginner_Workout />} />
          <Route path="/intermediate_workout" element={<Intermediate_Workout />} />
          <Route path="/advanced_workout" element={<Advanced_Workout />} />
        </Routes>
      </Box>
      {shouldShowFooter && <Footer />}
    </Box>
  );
};

export default App;
