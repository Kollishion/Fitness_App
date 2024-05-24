import React, { useEffect, useState } from "react";
import axios from "axios";
import "../stylesheets/login.css";
import { FaUser } from "react-icons/fa";
import { BiSolidLockAlt } from "react-icons/bi";

const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [action, setAction] = useState("");

  const [registerData, setRegisterData] = useState({
    role: "USER",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [registerError, setRegisterError] = useState("");

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        email,
        password,
      });
      localStorage.setItem("authToken", response.data.token); // Adjust this based on actual response structure
      setIsLoggedIn(true);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Invalid email or password");
    }
  };

  const handleRegisterChange = (event) => {
    const { name, value } = event.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      setRegisterError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/user/save", {
        username: registerData.username,
        email: registerData.email,
        password: registerData.password,
        role: registerData.role,
      });
      if (response.status === 201) {
        setAction("");
        setRegisterError("");
        setErrorMessage("");
      }
    } catch (error) {
      setRegisterError("Error registering user: " + error.message);
    }
  };

  const registerLink = () => {
    setAction(" active");
  };

  const loginLink = () => {
    setAction("");
  };

  return (
    <div className="login_container">
      <div className={`wrapper${action}`}>
        <div className="form-box login">
          <form className="login_form" onSubmit={handleLogin}>
            <h1>Ready To Gain?</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <BiSolidLockAlt className="icon " />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={registerLink}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="form-box register">
          <form className="login_form" onSubmit={handleRegister}>
            <h1>Ready To Join?</h1>
            <div className="input-box">
              <select
                id="Role"
                name="role"
                value={registerData.role}
                onChange={handleRegisterChange}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={registerData.username}
                onChange={handleRegisterChange}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                required
              />
              <BiSolidLockAlt className="icon " />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleRegisterChange}
                required
              />
              <BiSolidLockAlt className="icon " />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />I agree to the terms & conditions
              </label>
            </div>
            <button type="submit">Register</button>
            {registerError && <p className="error">{registerError}</p>}
            <div className="register-link">
              <p>
                Already have an account?{" "}
                <a href="#" onClick={loginLink}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
