import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom"; // ✅ Import Link

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [venuesDropdownOpen, setVenuesDropdownOpen] = useState(false);
  const [vendorsDropdownOpen, setVendorsDropdownOpen] = useState(false);
  const [realWeddingsDropdownOpen, setRealWeddingsDropdownOpen] = useState(false);
  const [photosDropdownOpen, setPhotosDropdownOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false); // ✅ Define state properly
  const [eInvitesDropdownOpen, setEInvitesDropdownOpen] = useState(false); // ✅ New State for E-Invites
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);


  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".dropdown") &&
        !event.target.closest(".dropbtn")
      ) {
        setVenuesDropdownOpen(false);
        setVendorsDropdownOpen(false);
        setRealWeddingsDropdownOpen(false);
        setPhotosDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Update isMobile state on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      {/* Top Navigation Bar */}
      <div className="top-nav">
        <span>India's Favourite Wedding Planning Platform</span>
       {/*  <select className="city-select">
          <option>All Cities</option>
          <option>Delhi</option>
          <option>Mumbai</option>
        </select> */}
        <div className="top-links">
          <span>
            <FaStar /> Write A Review
          </span>
          <span>
          {/*   <FaMobileAlt /> Download App */}
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="navbar">
         <h3 className="logo" width="194" height="30" color="white">UTSAV MITRA</h3> 
        {/* <div className="logo">WedMeGood</div>
 */}
        {/* Navigation Links */}
        <ul className={menuOpen ? "nav-links mobile-menu" : "nav-links"}>
          <li><Link to="/Home" className="nav-link">Home</Link>
          </li>
          {/* Venues Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={!isMobile ? () => setVenuesDropdownOpen(true) : null}
            onMouseLeave={!isMobile ? () => setVenuesDropdownOpen(false) : null}
            onClick={isMobile ? () => setVenuesDropdownOpen(!venuesDropdownOpen) : null}
          >
             <Link to="/Venue" className="nav-link">Venue</Link>
            {venuesDropdownOpen && (
              <div className="dropdown-content">
                <div className="dropdown-section">
                  <h3>By Type</h3>
                  <ul>
                    <li>Banquet Halls</li>
                    <li>Marriage Garden / Lawns</li>
                    <li>Wedding Resorts</li>
                    <li>Destination Wedding Venues</li>
                  </ul>
                </div>
                <div className="dropdown-section">
                  <h3>By City</h3>
                  <ul>
                    <li>Mumbai</li>
                    <li>Delhi</li>
                    <li>Bangalore</li>
                    <li>Kolkata</li>
                  </ul>
                </div>
                
              </div>
            )}
          </li>

          {/* Vendors Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={!isMobile ? () => setVendorsDropdownOpen(true) : null}
            onMouseLeave={!isMobile ? () => setVendorsDropdownOpen(false) : null}
            onClick={isMobile ? () => setVendorsDropdownOpen(!vendorsDropdownOpen) : null}
          >
        <Link to="/Vendors" className="nav-link">Vendors</Link>
            {vendorsDropdownOpen && (
              <div className="dropdown-content">
                <div className="dropdown-section">
                  <h3>Photographers</h3>
                  <ul>
                    <li>Wedding Photographers</li>
                    <li>Pre Wedding Shoot</li>
                  </ul>
                </div>
                <div className="dropdown-section">
                  <h3>Makeup</h3>
                  <ul>
                    <li>Bridal Makeup</li>
                    <li>Family Makeup</li>
                  </ul>
                </div>
                <div className="dropdown-section">
                  <h3>Bridal Wear</h3>
                  <ul>
                    <li>Bridal Lehengas</li>
                    <li>Silk Sarees</li>
                    <li>Bridal Jewelry</li>
                  </ul>
                </div>
                <div className="dropdown-section">
                  <h3>Groom Wear</h3>
                  <ul>
                    <li>Sherwani</li>
                    <li>Wedding Suits</li>
                  </ul>
                </div>
              </div>
            )}
          </li>

           {/* Photos Dropdown */}
           <li
            className="dropdown"
            onMouseEnter={!isMobile ? () => setPhotosDropdownOpen(true) : null}
            onMouseLeave={!isMobile ? () => setPhotosDropdownOpen(false) : null}
            onClick={isMobile ? () => setPhotosDropdownOpen(!photosDropdownOpen) : null}
          >
           <Link to="/Photos" className="nav-link">Photos</Link>

            {photosDropdownOpen && (
              <div className="dropdown-content">
                {/* <div className="dropdown-section">
                  <h3>Outfit</h3>
                  <ul>
                    <li>Bridal Lehenga</li>
                    <li>Wedding Sarees</li>
                    <li>Engagement</li>
                    <li>Mehndi</li>
                    <li>Blouse Designs</li>
                    <li>More</li>
                  </ul>
                </div> */}
                {/* <div className="dropdown-section">
                  <h3>Jewellery & Accessories</h3>
                  <ul>
                    <li>Bridal Jewellery</li>
                    <li>Engagement Rings</li>
                    <li>Floral Jewellery</li>
                    <li>More</li>
                  </ul>
                </div> */}
                <div className="dropdown-section">
                  <h3>Mehndi</h3>
                  <ul>
                    <li>Arabic</li>
                    <li>Mehndi Designs</li>
                    <li>Simple</li>
                    <li>Unique</li>
                    <li>More</li>
                  </ul>
                </div>
                <div className="dropdown-section">
                  <h3>Decor & Ideas</h3>
                  <ul>
                    <li>Wedding Decor</li>
                    <li>Bridal Entry</li>
                    <li>Groom Entry</li>
                    <li>Wedding Games</li>
                    <li>More</li>
                  </ul>
                </div>
              {/*   <div className="dropdown-section">
                  <h3>Wedding Card Designs</h3>
                  <ul>
                    <li>Designs</li>
                    <li>Wedding Gifts</li>
                    <li>Wedding Invitations</li>
                    <li>More</li>
                  </ul>
                </div> */}
                <div className="dropdown-section">
                  <h3>Wedding Photography</h3>
                  <ul>
                    <li>Pre Wedding Shoot</li>
                    <li>Wedding</li>
                    <li>Wedding Photoshoot & Poses</li>
                    <li>More</li>
                  </ul>
                </div>
               {/*  <div className="dropdown-section">
                  <h3>Groom Wear</h3>
                  <ul>
                    <li>Sherwani for Groom</li>
                    <li>Wedding Suits for Groom</li>
                    <li>More</li>
                  </ul>
                </div> */}
                {/* <div className="dropdown-section">
                  <h3>Bridal Makeup & Hair</h3>
                  <ul>
                    <li>Bridal Makeup</li>
                    <li>Bridal Hairstyles</li>
                    <li>Engagement</li>
                    <li>Mehndi</li>
                    <li>More</li>
                  </ul>
                </div> */}
              </div>
            )}
          </li>
          {/* Real Weddings Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={!isMobile ? () => setRealWeddingsDropdownOpen(true) : null}
            onMouseLeave={!isMobile ? () => setRealWeddingsDropdownOpen(false) : null}
            onClick={isMobile ? () => setRealWeddingsDropdownOpen(!realWeddingsDropdownOpen) : null}
          >
               <Link to="/real-weddings" className="nav-link">Real Weddings</Link> {/* ✅ Added */}

            {realWeddingsDropdownOpen && (
              <div className="dropdown-content">
                <div className="dropdown-section">
                  <h3>By City</h3>
                  <ul>
                    <li>Mumbai</li>
                    <li>Bangalore</li>
                    <li>Pune</li>
                    <li>Kolkata</li>
                    <li>Jaipur</li>
                    <li>Others</li>
                  </ul>
                </div>
                <div className="dropdown-section">
                  <h3>By Culture</h3>
                  <ul>
                    <li>Maharashtrian</li>
                    <li>Punjabi / Sikh</li>
                    <li>Bengali</li>
                    <li>Gujarati</li>
                    <li>Marwari</li>
                    <li>Telugu</li>
                    <li>Others</li>
                  </ul>
                </div>
                <div className="dropdown-section">
                  <h3>By Theme</h3>
                  <ul>
                    <li>Destination</li>
                    <li>Grand & Luxurious</li>
                    <li>Pocket-Friendly Stunners</li>
                    <li>Intimate & Minimalist</li>
                    <li>Modern & Stylish</li>
                    <li>International</li>
                    <li>Others</li>
                  </ul>
                </div>
               
              </div>
            )}
          </li>
          {/* Blog Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={!isMobile ? () => setBlogDropdownOpen(true) : null}
            onMouseLeave={!isMobile ? () => setBlogDropdownOpen(false) : null}
            onClick={isMobile ? () => setBlogDropdownOpen(!blogDropdownOpen) : null}
          >
            <Link to="/Blog" className="nav-link">Blog</Link>
            {blogDropdownOpen && (
              <div className="dropdown-content blog-dropdown">
                {/* <div className="dropdown-section">
                  <h3>Browse by Category</h3>
                  <ul>
                    <li>Bridal Makeup</li>
                    <li>Honeymoon Travel</li>
                    <li>Wedding Songs & Videos</li>
                    <li>Bridal Hairstyles</li>
                    <li>Wedding Decor Ideas</li>
                    <li>More</li>
                  </ul>
                </div> */}
                <div className="dropdown-section">
                  <h3>Popular Sections</h3>
                  <ul>
                    <li>South Indian Wedding</li>
                    <li>Real Brides Reveal</li>
                    <li>Bridal Buys</li>
                    <li>Mehendi Ideas</li>
                  </ul>
                </div>
                <div className="dropdown-section">
                  <h3>Most Searched Blogs</h3>
                  <ul>
                    <li>Wedding Songs</li>
                    <li>Best Bridal Entry Songs</li>
                    <li>Chandni Chowk Lehengas</li>
                    <li>2025 Marriage Dates</li>
                    <li>Latest Sabyasachi Lehengas</li>
                  </ul>
                </div>
                
              </div>
            )}
          </li>
         {/* E-Invites Dropdown */}
         <li
            className="dropdown"
            onMouseEnter={!isMobile ? () => setEInvitesDropdownOpen(true) : null}
            onMouseLeave={!isMobile ? () => setEInvitesDropdownOpen(false) : null}
            onClick={isMobile ? () => setEInvitesDropdownOpen(!eInvitesDropdownOpen) : null}
          >
          <Link to="/e-invites" className="nav-link">E-Invites</Link>

            {eInvitesDropdownOpen && (
              <div className="dropdown-content e-invites-dropdown">
                <ul>
                  <h3>Wedding Invitation Maker</h3>
                  <li>Wedding Card Designs</li>
                  <li>Invitation Video Templates</li>
                  <li>Save the Date Templates</li>
                </ul>
              </div>
            )}
          </li>
        
          <li>  <Link to="/Dashboard" className="nav-link">Dashboard</Link></li>
        </ul>
        

        {/* Right Section */}
    {/* Right Section */}
<div className="right-section">
  <span className="search-icon">
  {/*   <FaSearch /> */}
  <div
    className="dropdown login-dropdown"
    onMouseEnter={!isMobile ? () => setLoginDropdownOpen(true) : null}
    onMouseLeave={!isMobile ? () => setLoginDropdownOpen(false) : null}
    onClick={isMobile ? () => setLoginDropdownOpen(!loginDropdownOpen) : null}>
  
    <button className="login-btn">
      <FaUser /> Login
    </button>

    {loginDropdownOpen && (
      <div className="dropdown-content login-dropdown-content">
        <ul>
          <li>
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="nav-link">Signup</Link>
          </li>
        </ul>
      </div>
    )}
  </div>
  </span>

  {/* Login/Signup Dropdown */}
  




          {/* Hamburger Menu */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

