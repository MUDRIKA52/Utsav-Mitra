import React, { useEffect, useState } from "react";
import "../styles/RealWeddings.css"; // Import CSS file

const UNSPLASH_ACCESS_KEY = "658q6w5aw4CjYaImiPaWN7EfmNxnuEvI10cjo_Ohuew"; // Replace with your actual Unsplash API key
const CATEGORIES = ["All", "Hindu", "Muslim", "Christian", "Sikh", "Maharashtrian", "Bengali"];

function RealWeddings() {
  const [weddings, setWeddings] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async (category) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(category + " wedding")}&per_page=20&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`
      );
      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error(`Error fetching ${category} images:`, error);
      return [];
    }
  };

  useEffect(() => {
    const fetchCategoryPhotos = async () => {
      setLoading(true);
      setError("");

      try {
        let results = {};
        if (selectedCategory === "All") {
          for (const category of CATEGORIES.slice(1)) {
            results[category] = await fetchPhotos(category);
          }
        } else {
          results[selectedCategory] = await fetchPhotos(selectedCategory);
        }
        setWeddings(results);
      } catch (err) {
        setError("Failed to load images. Try again later.");
      }
      setLoading(false);
    };

    fetchCategoryPhotos();
  }, [selectedCategory]);

  return (
    <div className="real-weddings-container">
      <h2 className="title">Real Weddings</h2>

      {/* Category Dropdown */}
      <div className="category-select">
        <label htmlFor="category">Choose a Category: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Error Message */}
      {error && <p className="error">{error}</p>}

      {/* Loading Indicator */}
      {loading && <p className="loading">Loading images...</p>}

      {/* Display Selected Category */}
      {Object.entries(weddings).map(([category, images]) => (
        <div key={category}>
          <h3 className="category-title">{category} Weddings</h3>
          <div className="photo-grid">
            {Array.isArray(images) && images.length > 0 ? (
              images.map((photo) => (
                <div key={photo.id} className="photo-card">
                  <img
                    src={photo.urls.small}
                    alt={photo.alt_description || "Wedding image"}
                    className="photo-img"
                  />
                </div>
              ))
            ) : (
              <p>No images found.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RealWeddings;
