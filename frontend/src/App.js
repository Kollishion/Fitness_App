import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ExcerciseDetail from './pages/ExcerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShopCart from './components/ShopCart';
import About from './pages/About';
import Contact from './pages/Contact'; 
import "./App.css"

const App = () => {
  return (
    <Box>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/excercise/:id" element={<ExcerciseDetail />} />
            <Route path="/cart/:id" element={<ShopCart />} />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App