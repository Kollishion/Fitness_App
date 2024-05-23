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

  return (
    <div className="login">
      <div className="wrapper-login">
        <form onSubmit={handleLogin}>
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
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
