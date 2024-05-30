import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const AdminLogout = ({ handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/admin/login"); 
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Button onClick={handleLogoutClick}>Logout</Button>
    </Box>
  );
};

export default AdminLogout;
