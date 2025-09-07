// src/App.js
import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";  
import Photos from "./components/Photos"; 
import RealWeddings from "./components/RealWeddings";
import EInvites from "./components/EInvites";
import Blog from "./components/Blog";
import Venue from "./components/Venue";
import Vendors from "./components/Vendors";
import Dashboard from "./components/Dashboard";
import { auth } from "./firebaseConfig";
import Login from "./pages/Login";       
import Signup from "./pages/Signup";     
import { AuthContext, AuthProvider } from "./context/AuthContext";

// ✅ Role-based routing example with RoleProtectedRoute
const RoleProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" />; // If not logged in, redirect to login

  // If role doesn't match, redirect to unauthorized page
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

function App() {
  useEffect(() => {
    console.log("Firebase Auth loaded:", auth);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        
        <Routes>
          {/* Default route (homepage) */}
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />  
          <Route path="/Venue" element={<Venue />} />  
          <Route path="/Vendors" element={<Vendors />} />
          <Route path="/Photos" element={<Photos />} />  
          <Route path="/real-weddings" element={<RealWeddings />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/e-invites" element={<EInvites />} />

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route
            path="/Dashboard"
            element={
              <RoleProtectedRoute allowedRoles={['admin', 'user', 'vendor']}>
                <Dashboard />
              </RoleProtectedRoute>
            }
          />

          {/* Optional: Redirect unknown paths to Home or a 404 page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;



