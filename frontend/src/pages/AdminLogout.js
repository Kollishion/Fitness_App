import React from "react";
import { useNavigate } from "react-router-dom";

const AdminLogout = ({ handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/admin");
  };

  return <button onClick={handleLogoutClick}>Logout</button>;
};

export default AdminLogout;
