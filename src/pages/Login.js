// src/pages/Login.js
import "../styles/Login.css";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/Photos/login-bg.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(""); // ✅ For specific error message
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError(""); // Reset on new attempt

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      // ✅ More specific error messages
      switch (error.code) {
        case "auth/user-not-found":
          setLoginError("No user found with this email.");
          break;
        case "auth/wrong-password":
          setLoginError("Incorrect password. Please try again.");
          break;
        case "auth/invalid-email":
          setLoginError("Invalid email format.");
          break;
        case "auth/user-disabled":
          setLoginError("This user account has been disabled.");
          break;
        default:
          setLoginError("Login failed. Please try again later.");
      }
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="login-wrapper">
        <h2 className="login-heading">Welcome to EventEase</h2>
        <p className="login-subtext">Plan. Celebrate. Remember.</p>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        {/* ✅ Display error message */}
        {loginError && <p className="login-error">{loginError}</p>}
      </div>
    </div>
  );
};

export default Login;



