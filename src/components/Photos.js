import React, { useEffect, useState } from "react";
import "../styles/Photos.css"; // Import CSS file

const UNSPLASH_ACCESS_KEY = "658q6w5aw4CjYaImiPaWN7EfmNxnuEvI10cjo_Ohuew"; // Replace with your actual Unsplash API key

const CATEGORIES = ["all", "wedding", "venues", "henna", "indianWedding", "reception"];

function Photos() {
  const [photos, setPhotos] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPhotos = async (category) => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${category}&per_page=20&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`
        );
        const data = await response.json();
        return data.results;
      } catch (error) {
        console.error(`Error fetching ${category} images:`, error);
        return [];
      }
    };

    const fetchCategoryPhotos = async () => {
      setLoading(true);
      setError("");

      if (selectedCategory === "all") {
        // Fetch all categories (each with 20 photos)
        const wedding = await fetchPhotos("wedding");
        const venues = await fetchPhotos("wedding venue");
        const henna = await fetchPhotos("henna");
        const indianWedding = await fetchPhotos("indian wedding");
        const reception = await fetchPhotos("wedding reception");

        setPhotos({ wedding, venues, henna, indianWedding, reception });
      } else if (CATEGORIES.includes(selectedCategory)) {
        // Fetch only the selected category
        const images = await fetchPhotos(selectedCategory);
        setPhotos({ [selectedCategory]: images });
      } else {
        setError(`Invalid category. Please choose from: ${CATEGORIES.join(", ")}`);
        setPhotos({});
      }

      setLoading(false);
    };

    fetchCategoryPhotos();
  }, [selectedCategory]);

  return (
    <div className="photos-container">
      <h2 className="title">Wedding Photos</h2>

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
              {category === "all" ? "All Categories" : category.replace(/([A-Z])/g, " $1")}
            </option>
          ))}
        </select>
      </div>

      {/* Error Message */}
      {error && <p className="error">{error}</p>}

      {/* Loading Indicator */}
      {loading && <p className="loading">Loading images...</p>}

      {/* Display Selected Category */}
      {Object.entries(photos).map(([category, images]) => (
        <div key={category}>
          <h3 className="category-title">{category.replace(/([A-Z])/g, " $1")}</h3>
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

export default Photos;
