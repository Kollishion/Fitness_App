import React, { useState, useEffect } from "react";
import axios from "axios";
import "../stylesheets/login.css";
import { FaUser } from "react-icons/fa";
import { BiSolidLockAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import Logout from "./Logout";

const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [action, setAction] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    answer: "",
    phoneNumber: "",
  });
  const [registerError, setRegisterError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = () => {
    const token = sessionStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/logout");
  };

  const fetchSecurityQuestion = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/user/security-question",
        {
          params: { email },
        }
      );
      setSecurityQuestion(response.data.security_question);
    } catch (error) {
      console.error("Error fetching security question:", error);
      setErrorMessage("Error fetching security question");
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        email,
        password,
      });
      sessionStorage.setItem("authToken", response.data.token);
      setIsLoggedIn(true);
      setErrorMessage("");
      navigate("/");
    } catch (error) {
      setErrorMessage("Invalid email or password");
    }
  };

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/user/validate-security-answer",
        {
          email,
          answer: securityAnswer,
        }
      );
      alert("Security answer validated. You can now reset your password.");
      setShowForgotPassword(false);
    } catch (error) {
      setErrorMessage("Invalid security answer");
    }
  };

  const handleRegisterChange = (event) => {
    const { name, value } = event.target;

    // Check if the input field is the phone number
    if (name === "phoneNumber") {
      // Validate the input to allow only numbers
      const regex = /^[0-9\b]+$/;
      if (value === "" || regex.test(value)) {
        setRegisterData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else {
      // For other input fields, update the state directly
      setRegisterData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
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
        answer: registerData.answer, // Add the security answer to the payload
        phoneNumber: registerData.phoneNumber, // Add the phone number to the payload
      });
      if (response.status === 201) {
        setAction("");
        setRegisterError("");
        setErrorMessage("");
        navigate("/logout"); // Redirect to login after registration
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

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
    fetchSecurityQuestion();
  };

  return (
    <>
      {isLoggedIn ? (
        <Logout handleLogout={handleLogout} />
      ) : (
        <div className="login_container">
          <div className={`wrapper${action}`}>
            <div className="form-box login">
              {showForgotPassword ? (
                <form className="login_form" onSubmit={handleForgotPassword}>
                  <h1>Forgot Password</h1>
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
                    {securityQuestion && (
                      <>
                        <label>{securityQuestion}</label>
                        <input
                          type="text"
                          placeholder="Answer"
                          value={securityAnswer}
                          onChange={(e) => setSecurityAnswer(e.target.value)}
                          required
                        />
                      </>
                    )}
                  </div>
                  <button type="submit">Submit</button>
                  {errorMessage && <p className="error">{errorMessage}</p>}
                </form>
              ) : (
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
                    <a href="#" onClick={handleForgotPasswordClick}>
                      Forgot Password?
                    </a>
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
              )}
            </div>
            <div className="form-box register">
              <form className="login_form" onSubmit={handleRegister}>
                <h1>Ready To Join?</h1>
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
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="What is your pet's name?"
                    name="answer"
                    value={registerData.answer}
                    onChange={handleRegisterChange}
                    required
                  />
                  <BiSolidLockAlt className="icon " />
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Your Phone Number"
                    name="phoneNumber"
                    value={registerData.phoneNumber}
                    onChange={handleRegisterChange}
                    required
                  />
                  <FaPhoneAlt className="icon" />
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
      )}
    </>
  );
};

export default LoginForm;
