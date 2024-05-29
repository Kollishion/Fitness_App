import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="button-container">
        <button className="dashboard-button" onClick={() => handleButtonClick('/admin/user-data')}>
          User Data
        </button>
        <button className="dashboard-button" onClick={() => handleButtonClick('/admin/admin-data')}>
          Admin Data
        </button>
        <button className="dashboard-button" onClick={() => handleButtonClick('/admin/product-data')}>
          Product Data
        </button>
        <button className="dashboard-button" onClick={() => handleButtonClick('/admin/exercise-data')}>
          Exercise Data
        </button>
        <button className="dashboard-button" onClick={() => handleButtonClick('/admin/reviews-data')}>
          Reviews Data
        </button>
        <button className="dashboard-button" onClick={() => handleButtonClick('/admin/order-data')}>
          Order Data
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
