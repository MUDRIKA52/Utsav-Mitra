import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Company Info */}
        <div className="footer-section">
          <h3>Utsav Mitra- Your Personal Wedding Planner</h3>
          <p>Plan your wedding with us</p>
        </div>

        {/* Contact Details */}
        <div className="footer-section">
          <h3>Contact us to get best deals</h3>
          <p><strong>For Vendors:</strong> vendors@utsavmitra.com | 0124-6812346</p>
          <p><strong>For Users:</strong> info@utsavmitra.com | 0124-6812345</p>
          <p><strong>Registered Address:</strong> Second Floor, Ocus Technopolis, Sector 54 Golf Course Road, Gurgaon, Haryana, India, 122002</p>
        </div>

        {/* Social Links & App Links */}
        <div className="footer-section">
          <h3>Follow us on:</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>

          
        </div>
      </div>

      {/* Newsletter Subscription */}
      {/* <div className="newsletter">
        <h3>Get Latest Blog Alerts</h3>
        <div className="newsletter-form">
          <input type="email" placeholder="Email*" />
          <button>Submit</button>
        </div>
        <button className="vendor-btn">Register as a Vendor</button>
      </div> */}

      {/* Footer Links */}
      <div className="footer-links">
        <div>
          <h4>Start Planning</h4>
          <a href="/search-by-vendor">Search By Vendor</a>
          <a href="/search-by-city">Search By City</a>
          <a href="/download-app">Download Our App</a>
          <a href="/top-rated-vendors">Top Rated Vendors</a>
          <a href="/destination-wedding">Destination Wedding</a>
        </div>

        <div>
          <h4>Wedding Ideas</h4>
          <a href="/wedding-blog">Wedding Blog</a>
          <a href="/wedding-inspiration-gallery">Wedding Inspiration Gallery</a>
          <a href="/real-wedding">Real Wedding</a>
          <a href="/submit-wedding">Submit Wedding</a>
        </div>

        <div>
          <h4>Photo Gallery</h4>
          <a href="/bridal-wear">Bridal Wear</a>
          <a href="/wedding-jewellery">Wedding Jewellery</a>
          <a href="/bridal-makeup-hair">Bridal Makeup & Hair</a>
          <a href="/wedding-decor">Wedding Decor</a>
          <a href="/wedding-photography">Wedding Photography</a>
          <a href="/groom-wear">Groom Wear</a>
          <a href="/invitations-favors">Invitations & Favors</a>
          <a href="/wedding-accessories">Wedding Accessories</a>
          <a href="/mehendi-designs">Mehendi Designs</a>
        </div>

        <div>
          <h4>Home</h4>
          <a href="/about-wedmegood">About WedMeGood</a>
          <a href="/careers">Careers</a>
          <a href="/contact-us">Contact Us</a>
          <a href="/site-map">Site Map</a>
          <a href="/terms-conditions">Terms & Conditions</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/cancellation-policy">Cancellation Policy</a>
        </div>

        <div>
          <h4>Wedding Invitation Maker</h4>
          <a href="/wedding-card-designs">Wedding Card Designs</a>
          <a href="/save-the-date-templates">Save the Date Templates</a>
          <a href="/invitation-video-templates">Invitation Video Templates</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Utsav Mitra</p>
        <p><a href="/terms-conditions">Terms & Conditions</a> | <a href="/privacy-policy">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
