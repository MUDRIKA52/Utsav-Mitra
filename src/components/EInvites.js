import React, { useEffect, useState } from "react";
import "../styles/EInvites.css"; // Import CSS file

const UNSPLASH_ACCESS_KEY = "658q6w5aw4CjYaImiPaWN7EfmNxnuEvI10cjo_Ohuew"; // Replace with your actual Unsplash API key

const CATEGORIES = ["All", "Floral", "Modern", "Vintage", "Minimalist", "Royal", "Watercolor"];

function EInvites() {
  const [invites, setInvites] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPhotos = async (category) => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${category} wedding invitation&per_page=20&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`
        );
        const data = await response.json();
        return data.results;
      } catch (error) {
        console.error(`Error fetching ${category} invites:`, error);
        return [];
      }
    };

    const fetchCategoryPhotos = async () => {
      setLoading(true);
      setError("");

      if (selectedCategory === "All") {
        // Fetch all categories
        const floral = await fetchPhotos("Floral");
        const modern = await fetchPhotos("Modern");
        const vintage = await fetchPhotos("Vintage");
        const minimalist = await fetchPhotos("Minimalist");
        const royal = await fetchPhotos("Royal");
        const watercolor = await fetchPhotos("Watercolor");

        setInvites({ Floral: floral, Modern: modern, Vintage: vintage, Minimalist: minimalist, Royal: royal, Watercolor: watercolor });
      } else if (CATEGORIES.includes(selectedCategory)) {
        // Fetch only the selected category
        const photos = await fetchPhotos(selectedCategory);
        setInvites({ [selectedCategory]: photos });
      } else {
        setError(`Invalid category. Please choose from: ${CATEGORIES.join(", ")}`);
        setInvites({});
      }

      setLoading(false);
    };

    fetchCategoryPhotos();
  }, [selectedCategory]);

  return (
    <div className="e-invites-container">
      <h2 className="title">E-Invites</h2>

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
      {Object.entries(invites).map(([category, images]) => (
        <div key={category}>
          <h3 className="category-title">{category}</h3>
          <div className="photo-grid">
            {images.map((photo) => (
              <div key={photo.id} className="photo-card">
                <img
                  src={photo.urls.small}
                  alt={photo.alt_description || category}
                  className="photo-img"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EInvites;
