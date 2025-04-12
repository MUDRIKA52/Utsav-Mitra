import React, { useState } from "react";
import "../styles/Vendors.css"; // Import CSS file

// Dummy vendor data for 5 categories
const vendorData = {
  "Event Planners": [
    { id: 1, name: "Grand Event Co.", location: "Mumbai", price: "₹50,000", image: "https://source.unsplash.com/400x300/?event,planning" },
    { id: 2, name: "Royal Occasions", location: "Delhi", price: "₹75,000", image: "https://source.unsplash.com/400x300/?wedding,planner" },
    { id: 3, name: "Elite Weddings", location: "Bangalore", price: "₹85,000", image: "https://source.unsplash.com/400x300/?wedding,event" },
    { id: 4, name: "Celebration Makers", location: "Jaipur", price: "₹65,000", image: "https://source.unsplash.com/400x300/?event,ceremony" },
    { id: 5, name: "Blissful Moments", location: "Goa", price: "₹90,000", image: "https://source.unsplash.com/400x300/?wedding,celebration" },
  ],
  "Catering Services": [
    { id: 1, name: "Deluxe Caterers", location: "Mumbai", price: "₹1,20,000", image: "https://source.unsplash.com/400x300/?food,catering" },
    { id: 2, name: "Royal Banquet Catering", location: "Delhi", price: "₹1,50,000", image: "https://source.unsplash.com/400x300/?buffet,wedding" },
  ],
  "Photography": [
    { id: 1, name: "Lens Masters", location: "Mumbai", price: "₹80,000", image: "https://source.unsplash.com/400x300/?photography,wedding" },
    { id: 2, name: "Golden Memories", location: "Delhi", price: "₹90,000", image: "https://source.unsplash.com/400x300/?camera,wedding" },
  ],
  "Decoration Services": [
    { id: 1, name: "Dream Decor", location: "Mumbai", price: "₹40,000", image: "https://source.unsplash.com/400x300/?decoration,wedding" },
    { id: 2, name: "Blooming Bouquets", location: "Delhi", price: "₹55,000", image: "https://source.unsplash.com/400x300/?flowers,decoration" },
  ],
  "Entertainment": [
    { id: 1, name: "DJ Beats", location: "Mumbai", price: "₹30,000", image: "https://source.unsplash.com/400x300/?dj,music" },
    { id: 2, name: "Live Band Express", location: "Delhi", price: "₹70,000", image: "https://source.unsplash.com/400x300/?live,band" },
  ],
};

function Vendors() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedVendor, setSelectedVendor] = useState(null);

  // Get vendors based on selected category
  const getVendors = () => {
    if (selectedCategory === "All Categories") {
      return Object.values(vendorData).flat(); // Merge all categories
    }
    return vendorData[selectedCategory] || [];
  };

  return (
    <div className="vendors-container">
      <h2 className="vendors-title">Find Trusted Vendors</h2>

      {/* Dropdown to filter by category */}
      <div className="category-filter">
        <label>Sort by Category:</label>
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option value="All Categories">All Categories</option>
          {Object.keys(vendorData).map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Vendor List */}
      <div className="vendor-list">
        {getVendors().map((vendor) => (
          <div key={vendor.id} className="vendor-card" onClick={() => setSelectedVendor(vendor)}>
            <img src={vendor.image} alt={vendor.name} className="vendor-image" />
            <div className="vendor-details">
              <h3>{vendor.name}</h3>
              <p className="vendor-location">{vendor.location}</p>
              <p className="vendor-price">{vendor.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Vendor Detail Popup */}
      {selectedVendor && (
        <div className="vendor-modal" onClick={() => setSelectedVendor(null)}>
          <div className="vendor-modal-content">
            <img src={selectedVendor.image} alt={selectedVendor.name} className="vendor-modal-image" />
            <h3>{selectedVendor.name}</h3>
            <p><strong>Location:</strong> {selectedVendor.location}</p>
            <p><strong>Price:</strong> {selectedVendor.price}</p>
            <button className="close-btn" onClick={() => setSelectedVendor(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Vendors;
