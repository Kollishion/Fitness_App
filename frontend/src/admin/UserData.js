import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserData.css';

const UserData = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/admins/users/getAll')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => setError(error));
  }, []);

  const deleteUser = (userId) => {
    fetch(`http://localhost:8080/admins/users/delete/${userId}`, {
      method: 'POST',
    })
      .then(response => {
        if (response.ok) {
          setUsers(users.filter(user => user.userId !== userId));
        } else {
          throw new Error('Failed to delete user');
        }
      })
      .catch(error => setError(error));
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">User Data</h1>
      <button className="btn-dash" onClick={() => navigate('/admin')}>
        Dashboard
      </button>
      {error && <p className="text-danger">{error.message}</p>}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteUser(user.userId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
