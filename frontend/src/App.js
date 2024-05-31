import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
import Workout from "./pages/Workout";
import Logout from "./pages/Logout";
import Details from "./components/details/Details";
import Beginner_Workout from "./pages/Beginner_Workout";
import Intermediate_Workout from "./pages/Intermediate_Workout";
import Advanced_Workout from "./pages/Advanced_Workout";
import AdminDashboard from "./admin/AdminDashboard";
import UserData from "./admin/UserData";
import AdminData from "./admin/AdminData";
import ProductData from "./admin/ProductData";
import ExercisePage from "./admin/ExercisePage";
import ReviewsData from "./admin/ReviewsData";
import OrderData from "./admin/OrderData";
import EditProductForm from "./admin/EditProductForm";
import AddProductForm from "./admin/AddProductForm";
import AdminLogin from "./pages/AdminLogin";
import AdminLogout from "./pages/AdminLogout";
import UserProfile from "./pages/UserProfile";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    checkLoggedIn();
    checkAdminLoggedIn();
  }, [location.pathname]);

  const checkLoggedIn = () => {
    const token = sessionStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  };

  const checkAdminLoggedIn = () => {
    const token = sessionStorage.getItem("adminAuthToken");
    setIsAdminLoggedIn(!!token);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/logout");
  };

  const isLoginRoute =
    location.pathname === "/Login" || location.pathname === "/admin";
  const isExerciseDetailRoute = location.pathname === "/exerciseDetail";
  const isAdvanced = location.pathname === "/advanced";
  const isIntermediate = location.pathname === "/intermediate";
  const isBeginner = location.pathname === "/beginner";
  const isAdminRoute = location.pathname.startsWith("/admin");

  const shouldShowNavbar = !isLoginRoute && !isAdminRoute;
  const shouldShowFooter =
    !isLoginRoute &&
    !isBeginner &&
    !isIntermediate &&
    !isAdvanced &&
    !isExerciseDetailRoute &&
    !isAdminRoute;

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {shouldShowNavbar && (
        <Navbar
          cartCount={0}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
      )}
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
          <Route path="/checkout" element={<ShopCart />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/Beginner_Workout" element={<Beginner_Workout />} />
          <Route
            path="/Intermediate_Workout"
            element={<Intermediate_Workout />}
          />
          <Route path="/Advanced_Workout" element={<Advanced_Workout />} />
          <Route path="/details" element={<Details />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/AdminLogout" element={<AdminLogout />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/userData" element={<UserData />} />
          <Route path="/admin/adminData" element={<AdminData />} />
          <Route path="/admin/productData" element={<ProductData />} />
          <Route path="/admin/exercisePage" element={<ExercisePage />} />
          <Route path="/admin/reviewsData" element={<ReviewsData />} />
          <Route path="/admin/orderData" element={<OrderData />} />
          <Route path="/admin/editProduct/:id" element={<EditProductForm />} />
          <Route path="/admin/addProduct" element={<AddProductForm />} />
          <Route
            path="/userProfile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
        </Routes>
      </Box>
      {shouldShowFooter && <Footer />}
    </Box>
  );
};

export default App;
