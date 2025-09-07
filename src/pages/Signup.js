import React, { useState, useContext } from "react"; 
import { AuthContext } from "../context/AuthContext";
import "../styles/Signup.css";
import bgImage from "../assets/Photos/login-bg.jpg";

// ✅ Firestore imports
import { db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const { signup: handleSignup, googleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // ✅ Default role
  const [error, setError] = useState("");

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await handleSignup(email, password);

      // ✅ Save user role in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email,
        role,
      });

      // Optional: Redirect or show success
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await googleLogin();
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        setError("You closed the popup. Please try again and complete the sign-in.");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div
      className="signup-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}
    >
      <div className="signup-card">
        <h2 className="signup-title">Create an Account</h2>
        <form onSubmit={handleSignupSubmit} className="signup-form">
          <input
            type="email"
            placeholder="Email"
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

          {/* ✅ Role dropdown */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="user">User</option>
            <option value="vendor">Vendor</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="or-text">or</p>
        <button onClick={handleGoogleSignup} className="google-btn">
          Sign Up with Google
        </button>
        {error && <p className="error-text">{error}</p>}
      </div>
    </div>
  );
};

export default Signup;

