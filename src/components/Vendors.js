import React, { useState } from "react";
import "../styles/Vendors.css";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [bookingData, setBookingData] = useState({
    vendor: "",
    date: "",
    slot: "Morning",
  });

  const getVendors = () => {
    if (selectedCategory === "All Categories") {
      return Object.values(vendorData).flat();
    }
    return vendorData[selectedCategory] || [];
  };

  const handleBookNowClick = (vendorName) => {
    setBookingData({ ...bookingData, vendor: vendorName });
    setSidebarOpen(true);
  };

  const handleBookingSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });
      if (response.ok) {
        alert("Booking successful!");
        setSidebarOpen(false);
        setBookingData({ vendor: "", date: "", slot: "Morning" });
      } else {
        alert("Failed to book!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="vendors-container">
      <h2 className="vendors-title">Find Trusted Vendors</h2>

      <div className="category-filter">
        <label>Sort by Category:</label>
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option value="All Categories">All Categories</option>
          {Object.keys(vendorData).map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="vendor-list">
        {getVendors().map((vendor) => (
          <div key={vendor.id} className="vendor-card">
            <div className="vendor-details">
              <h3>{vendor.name}</h3>
              <p className="vendor-location">{vendor.location}</p>
              <p className="vendor-price">{vendor.price}</p>
              <button className="book-now-btn" onClick={() => handleBookNowClick(vendor.name)}>Book Now</button>
              <button className="more-info-btn" onClick={() => setSelectedVendor(vendor)}>More Info</button>
            </div>
          </div>
        ))}
      </div>

      {sidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-content">
            <h3>Booking Details</h3>
            <p><strong>Vendor:</strong> {bookingData.vendor}</p>

            <label>Select Date:</label>
            <input
              type="date"
              value={bookingData.date}
              onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
            />

            <label>Slot:</label>
            <select
              value={bookingData.slot}
              onChange={(e) => setBookingData({ ...bookingData, slot: e.target.value })}
            >
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>

            <button className="submit-btn" onClick={handleBookingSubmit}>Book Now</button>
            <button className="close-btn" onClick={() => setSidebarOpen(false)}>Close</button>
          </div>
        </div>
      )}

      {selectedVendor && (
        <div className="vendor-modal" onClick={() => setSelectedVendor(null)}>
          <div className="vendor-modal-content" onClick={(e) => e.stopPropagation()}>
         {/*    <img src={selectedVendor.image} alt={selectedVendor.name} className="vendor-modal-image" /> */}
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


