import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ExcerciseDetail from './pages/ExcerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./App.css"

const App = () => {
  return (
    <Box>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/excercise/:id" element={<ExcerciseDetail />} />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App