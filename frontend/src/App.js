import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShopCart from './components/ShopCart';
import About from './pages/About';
import Contact from './pages/Contact'; 
import Login from './pages/Login'
import "./App.css"
import DifficultyBasedExercises from './components/DifficultyBasedExercises';

const App = () => {
  return (
    <Box>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/exerciseDetail" element={<ExerciseDetail />} />
            <Route path="/cart/:id" element={<ShopCart />} />
            <Route path="/Login" element={<Login />} />
            <Route path='/exercises' element={<DifficultyBasedExercises />} />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App