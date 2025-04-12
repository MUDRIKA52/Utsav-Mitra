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
            <a href="javascript:void(0)">Facebook</a>
            <a href="javascript:void(0)">Twitter</a>
            <a href="javascript:void(0)">Pinterest</a>
            <a href="javascript:void(0)">Instagram</a>
            <a href="javascript:void(0)">YouTube</a>
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
          <a href="javascript:void(0)">Search By Vendor</a>
          <a href="javascript:void(0)">Search By City</a>
          <a href="javascript:void(0)">Download Our App</a>
          <a href="javascript:void(0)">Top Rated Vendors</a>
          <a href="javascript:void(0)">Destination Wedding</a>
        </div>

        <div>
          <h4>Wedding Ideas</h4>
          <a href="javascript:void(0)">Wedding Blog</a>
          <a href="javascript:void(0)">Wedding Inspiration Gallery</a>
          <a href="javascript:void(0)">Real Wedding</a>
          <a href="javascript:void(0)">Submit Wedding</a>
        </div>

        <div>
          <h4>Photo Gallery</h4>
          <a href="javascript:void(0)">Bridal Wear</a>
          <a href="javascript:void(0)">Wedding Jewellery</a>
          <a href="javascript:void(0)">Bridal Makeup & Hair</a>
          <a href="javascript:void(0)">Wedding Decor</a>
          <a href="javascript:void(0)">Wedding Photography</a>
          <a href="javascript:void(0)">Groom Wear</a>
          <a href="javascript:void(0)">Invitations & Favors</a>
          <a href="javascript:void(0)">Wedding Accessories</a>
          <a href="javascript:void(0)">Mehendi Designs</a>
        </div>

        <div>
          <h4>Home</h4>
          <a href="javascript:void(0)">About WedMeGood</a>
          <a href="javascript:void(0)">Careers</a>
          <a href="javascript:void(0)">Contact Us</a>
          <a href="javascript:void(0)">Site Map</a>
          <a href="javascript:void(0)">Terms & Conditions</a>
          <a href="javascript:void(0)">Privacy Policy</a>
          <a href="javascript:void(0)">Cancellation Policy</a>
        </div>

        <div>
          <h4>Wedding Invitation Maker</h4>
          <a href="javascript:void(0)">Wedding Card Designs</a>
          <a href="javascript:void(0)">Save the Date Templates</a>
          <a href="javascript:void(0)">Invitation Video Templates</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 WedMeGood</p>
        <p><a href="javascript:void(0)">Terms & Conditions</a> | <a href="javascript:void(0)">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
