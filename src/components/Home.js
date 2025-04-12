import React, { useState, useEffect } from "react";
import "../styles/Home.css"; // Import CSS file

const categories = [
  { name: "Wedding", query: "wedding" },
  { name: "Venues", query: "wedding venue" },
  { name: "Henna", query: "henna" },
  { name: "Indian Wedding", query: "indian wedding" },
  { name: "Reception", query: "wedding reception" },
  { name: "Decorations", query: "wedding decorations" },
  { name: "Bridal Makeup", query: "bridal makeup" },
  { name: "Traditional Attire", query: "traditional wedding dress" },
  { name: "Wedding Photography", query: "wedding photography" },
  { name: "Catering", query: "wedding catering" },
];

const UNSPLASH_ACCESS_KEY = "658q6w5aw4CjYaImiPaWN7EfmNxnuEvI10cjo_Ohuew"; // Replace with your API key

function Home() {
  const [photos, setPhotos] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPhotos = async () => {
      const fetchedPhotos = {};
      for (const category of categories) {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${category.query}&per_page=30&client_id=${UNSPLASH_ACCESS_KEY}`
        );
        const data = await response.json();
        fetchedPhotos[category.name] = data.results;
      }
      setPhotos(fetchedPhotos);
    };

    fetchPhotos();
  }, []);

  return (
    <div className="home-container">
      {/* 🔍 Search Bar with Background */}
      <div className="search-bar">
        <div className="search-bg">
          <input
            type="text"
            placeholder="Search for weddings, venues..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button>🔍</button>
        </div>
      </div>

      {/* 📸 Categories with Continuous Scrolling Images */}
      <div className="categories">
        {categories.map((category) => (
          <div key={category.name} className="category">
            <h3>{category.name}</h3>
            <div className="photo-slider">
              <div className="photo-track">
                {photos[category.name]?.map((photo) => (
                  <div key={photo.id} className="photo-card">
                    <img
                      src={photo.urls.small}
                      alt={photo.alt_description || category.name}
                      className="photo-img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
