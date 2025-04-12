import React, { useState } from "react";
import "../styles/Venue.css"; // Import CSS file

// Dummy venue data
const venuesData = [
  { id: 1, name: "The Grand Palace", location: "Mumbai", price: "₹1,50,000", image: "https://source.unsplash.com/400x300/?wedding,hall" },
  { id: 2, name: "Royal Orchid Banquet", location: "Delhi", price: "₹1,20,000", image: "https://source.unsplash.com/400x300/?wedding,venue" },
  { id: 3, name: "Sunset Lawn", location: "Jaipur", price: "₹90,000", image: "https://source.unsplash.com/400x300/?wedding,garden" },
  { id: 4, name: "Lotus Convention Center", location: "Bangalore", price: "₹1,75,000", image: "https://source.unsplash.com/400x300/?wedding,banquet" },
  { id: 5, name: "Majestic Villa", location: "Goa", price: "₹2,00,000", image: "https://source.unsplash.com/400x300/?wedding,villa" },
];

function Venue() {
  const [search, setSearch] = useState("");

  // Filter venues based on search input
  const filteredVenues = venuesData.filter((venue) =>
    venue.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="venue-container">
      <h2 className="venue-title">Find Your Perfect Venue</h2>

      {/* Search Box */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Venue List */}
      <div className="venue-list">
        {filteredVenues.length > 0 ? (
          filteredVenues.map((venue) => (
            <div key={venue.id} className="venue-card">
              <img src={venue.image} alt={venue.name} className="venue-image" />
              <div className="venue-details">
                <h3>{venue.name}</h3>
                <p className="venue-location">{venue.location}</p>
                <p className="venue-price">{venue.price}</p>
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No venues found for "{search}"</p>
        )}
      </div>
    </div>
  );
}

export default Venue;
