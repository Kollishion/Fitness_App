import React from "react";
import AdminLogout from "./AdminLogout";

const AdminDashboard = () => {
  const handleLogout = () => {
    sessionStorage.removeItem("adminAuthToken");
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AdminLogout handleLogout={handleLogout} /> // Pass handleLogout as a prop
    </div>
  );
};

export default AdminDashboard;
