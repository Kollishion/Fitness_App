import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const AdminLoginContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
});

const AdminLoginForm = styled(Box)({
  width: "300px",
  padding: "20px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  backgroundColor: "#fff",
});

const AdminLogin = () => {
  const navigate = useNavigate();
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = () => {
    const token = sessionStorage.getItem("adminAuthToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuthToken");
    setIsLoggedIn(false);
    navigate("/admin/login");
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/admins/login", {
        adminEmail,
        adminPassword,
      });
      sessionStorage.setItem("adminAuthToken", response.data.token);
      setIsLoggedIn(true);
      setErrorMessage("");
      navigate("/admin/dashboard");
    } catch (error) {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <AdminLoginContainer>
      <AdminLoginForm>
        <Typography variant="h5" align="center" gutterBottom>
          Admin Login
        </Typography>
        <form onSubmit={handleAdminLogin}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
        {errorMessage && <Typography color="error">{errorMessage}</Typography>}
      </AdminLoginForm>
    </AdminLoginContainer>
  );
};

export default AdminLogin;
