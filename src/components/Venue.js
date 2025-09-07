import React, { useState } from "react";
import "../styles/Venue.css";

const venuesData = [
  { id: 1, name: "The Grand Palace", location: "Mumbai", price: "₹1,50,000", image: "https://source.unsplash.com/400x300/?wedding,hall" },
  { id: 2, name: "Royal Orchid Banquet", location: "Delhi", price: "₹1,20,000", image: "https://source.unsplash.com/400x300/?wedding,venue" },
  { id: 3, name: "Sunset Lawn", location: "Jaipur", price: "₹90,000", image: "https://source.unsplash.com/400x300/?wedding,garden" },
  { id: 4, name: "Lotus Convention Center", location: "Bangalore", price: "₹1,75,000", image: "https://source.unsplash.com/400x300/?wedding,banquet" },
  { id: 5, name: "Majestic Villa", location: "Goa", price: "₹2,00,000", image: "https://source.unsplash.com/400x300/?wedding,villa" },
];

function Venue() {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [bookingData, setBookingData] = useState({
    vendor: "",
    date: "",
    slot: "Morning",
  });

  const filteredVenues = venuesData.filter((venue) =>
    venue.location.toLowerCase().includes(search.toLowerCase())
  );

  const handleBookNowClick = (venueName) => {
    setBookingData({ ...bookingData, vendor: venueName });
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
    <div className="venue-container">
      <h2 className="venue-title">Find Your Perfect Venue</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="venue-list">
        {filteredVenues.length > 0 ? (
          filteredVenues.map((venue) => (
            <div key={venue.id} className="venue-card">
             {/*  <img src={venue.image} alt={venue.name} className="venue-image" /> */}
              <div className="venue-details">
                <h3>{venue.name}</h3>
                <p className="venue-location">{venue.location}</p>
                <p className="venue-price">{venue.price}</p>
                <button className="book-btn" onClick={() => handleBookNowClick(venue.name)}>Book Now</button>
                <button className="more-info-btn" onClick={() => setSelectedVenue(venue)}>More Info</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No venues found for "{search}"</p>
        )}
      </div>

      {sidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-content">
            <h3>Booking Details</h3>
            <p><strong>Venue:</strong> {bookingData.vendor}</p>

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

      {selectedVenue && (
        <div className="vendor-modal" onClick={() => setSelectedVenue(null)}>
          <div className="vendor-modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedVenue.name}</h3>
            {/* <img src={selectedVenue.image} alt={selectedVenue.name} className="venue-image" /> */}
            <p><strong>Location:</strong> {selectedVenue.location}</p>
            <p><strong>Price:</strong> {selectedVenue.price}</p>
            <button onClick={() => setSelectedVenue(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Venue;
