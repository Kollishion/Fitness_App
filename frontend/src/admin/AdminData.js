import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminData.css';

const AdminData = () => {
  const [admins, setAdmins] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/admins/getAll')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setAdmins(data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Admin Data</h1>
      <button className="btn-dash" onClick={() => navigate('/admin')}>
        Dashboard
      </button>
      {error && <p className="text-danger">{error}</p>}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {admins.map(admin => (
            <tr key={admin.adminId}>
              <td>{admin.adminId}</td>
              <td>{admin.adminEmail}</td>
              <td>{admin.adminPassword}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminData;
