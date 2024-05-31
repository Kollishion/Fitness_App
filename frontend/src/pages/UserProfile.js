import React, { useState, useEffect } from "react";
import axios from "axios";
import "../stylesheets/UserProfile.css";
import { GiGymBag } from "react-icons/gi";

const UserProfile = ({ userId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "",
    phone: "",
    address: "",
    email: "",
  });
  const [showOrders, setShowOrders] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/user/get/${userId}`
        );
        const data = response.data;
        setProfile({
          fullName: data.username,
          phone: data.phoneNumber ? data.phoneNumber.toString() : "",
          address: data.address ? data.address.substring(0, 30) : "",
          email: data.email,
        });
        console.log(
          profile.fullName,
          profile.phone,
          profile.address,
          profile.email
        );
      } catch (error) {
        console.error("There was an error fetching the user profile!", error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleOrdersToggle = () => {
    setShowOrders(!showOrders);
    setShowChangePassword(false);
  };

  const handleChangePasswordToggle = () => {
    setShowChangePassword(!showChangePassword);
    setShowOrders(false);
  };

  useEffect(() => {
    if (showOrders) {
      document.querySelector(".orders-modal").classList.add("visible");
    } else {
      document.querySelector(".orders-modal").classList.remove("visible");
    }
  }, [showOrders]);

  useEffect(() => {
    if (showChangePassword) {
      document.querySelector(".password-modal").classList.add("visible");
    } else {
      document.querySelector(".password-modal").classList.remove("visible");
    }
  }, [showChangePassword]);

  return (
    <div className="profile-container">
      <div
        className={`backdrop ${showOrders || showChangePassword ? "blur" : ""}`}
        onClick={() => {
          setShowOrders(false);
          setShowChangePassword(false);
        }}
      ></div>
      <div className="profile-box-wrapper">
        <div className="profile-box">
          <div className="profile-section">
            <div className="profile-header">
              <div className="profile-pic">
                <GiGymBag size={100} margin />
              </div>
              <span className="profile-username">{profile.username}</span>
            </div>

            <hr className="divider" />
            <div className="profile-details">
              <input
                className="profile-input"
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                disabled={!isEditing}
              />
              <input
                className="profile-input"
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                disabled={!isEditing}
              />
              <input
                className="profile-input"
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
                disabled={!isEditing}
              />
              <input
                className="profile-input"
                type="text"
                name="email"
                value={profile.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
              <button className="edit-button" onClick={handleEditToggle}>
                {isEditing ? "Save" : "Edit Profile"}
              </button>
            </div>
          </div>
          <div className="empty-section">
            <img
              src="https://redxero.com/wp-content/uploads/bb-plugin/cache/02_workout-ypX6PXfs-square-174a674055966b8a2223bf03cffb9b2c-5e5659997fd44.jpg"
              alt="Your description"
            />
          </div>
          <div className="action-section">
            <button
              className="action-button"
              onClick={handleChangePasswordToggle}
            >
              Change Password
            </button>
            <button className="action-button" onClick={handleOrdersToggle}>
              See Orders
            </button>
          </div>
        </div>
      </div>

      <div className="orders-modal">
        <h2>Order List</h2>
        <ul>
          <li>
            <span>Order Name: Protein Shake</span>
            <span>Timestamp: 2024-05-25 10:00</span>
          </li>
          <li>
            <span>Order Name: Gym Gloves</span>
            <span>Timestamp: 2024-05-26 14:30</span>
          </li>
          <li>
            <span>Order Name: Yoga Mat</span>
            <span>Timestamp: 2024-05-27 08:20</span>
          </li>
        </ul>
      </div>

      <div className="password-modal">
        <h2>Change Password</h2>
        <div className="password-inputs">
          <input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            className="profile-input"
          />
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            className="profile-input"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="profile-input"
          />
          <button className="action-button-sub">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
