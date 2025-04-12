import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Company Info */}
        <div className="footer-section">
          <h3>WedMeGood - Your Personal Wedding Planner</h3>
          <p>Plan your wedding with us</p>
        </div>

        {/* Contact Details */}
        <div className="footer-section">
          <h3>Contact us to get best deals</h3>
          <p><strong>For Vendors:</strong> vendors@wedmegood.com | 0124-6812346</p>
          <p><strong>For Users:</strong> info@wedmegood.com | 0124-6812345</p>
          <p><strong>Registered Address:</strong> Second Floor, Ocus Technopolis, Sector 54 Golf Course Road, Gurgaon, Haryana, India, 122002</p>
        </div>

        {/* Social Links & App Links */}
        <div className="footer-section">
          <h3>Follow us on:</h3>
          <div className="social-icons">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Pinterest</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>

          <h3>Get The WedMeGood App</h3>
          <div className="app-links">
            <img src="appstore.png" alt="App Store" />
            <img src="playstore.png" alt="Google Play" />
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="newsletter">
        <h3>Get Latest Blog Alerts</h3>
        <div className="newsletter-form">
          <input type="email" placeholder="Email*" />
          <button>Submit</button>
        </div>
        <button className="vendor-btn">Register as a Vendor</button>
      </div>

      {/* Footer Links */}
      <div className="footer-links">
        <div>
          <h4>Start Planning</h4>
          <a href="#">Search By Vendor</a>
          <a href="#">Search By City</a>
          <a href="#">Download Our App</a>
          <a href="#">Top Rated Vendors</a>
          <a href="#">Destination Wedding</a>
        </div>

        <div>
          <h4>Wedding Ideas</h4>
          <a href="#">Wedding Blog</a>
          <a href="#">Wedding Inspiration Gallery</a>
          <a href="#">Real Wedding</a>
          <a href="#">Submit Wedding</a>
        </div>

        <div>
          <h4>Photo Gallery</h4>
          <a href="#">Bridal Wear</a>
          <a href="#">Wedding Jewellery</a>
          <a href="#">Bridal Makeup & Hair</a>
          <a href="#">Wedding Decor</a>
          <a href="#">Wedding Photography</a>
          <a href="#">Groom Wear</a>
          <a href="#">Invitations & Favors</a>
          <a href="#">Wedding Accessories</a>
          <a href="#">Mehendi Designs</a>
        </div>

        <div>
          <h4>Home</h4>
          <a href="#">About WedMeGood</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
          <a href="#">Site Map</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cancellation Policy</a>
        </div>

        <div>
          <h4>Wedding Invitation Maker</h4>
          <a href="#">Wedding Card Designs</a>
          <a href="#">Save the Date Templates</a>
          <a href="#">Invitation Video Templates</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 WedMeGood</p>
        <p><a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
