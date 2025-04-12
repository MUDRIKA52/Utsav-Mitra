import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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





function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar appears on every page */}
      
      <Routes>
        <Route path="/Home" element={<Home />} />  {/* Home Page */}
        <Route path="/Venue" element={<Venue />} />  {/* Venue Page */}
        <Route path="/Vendors" element={<Vendors/>} />
        <Route path="/Photos" element={<Photos />} />  {/* Photos Page */}
        <Route path="/real-weddings" element={<RealWeddings />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/e-invites" element={<EInvites />} />
        <Route path="/Dashboard" element={<Dashboard />} />  {/* Venue Page */}

      </Routes>
      
      <Footer /> {/* Footer appears on every page */}
    </Router>
  );
}

export default App;
