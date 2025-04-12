import React, { useEffect, useState } from "react";
import "../styles/Blog.css";

const BLOG_FEED_URL = "https://medium.com/feed/tag/wedding";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(BLOG_FEED_URL)}`);
        const data = await response.json();
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, "text/xml");

        const items = Array.from(xml.querySelectorAll("item")).slice(0, 5);
        const parsedBlogs = items.map((item) => ({
          title: item.querySelector("title").textContent,
          link: item.querySelector("link").textContent,
          description: item.querySelector("description").textContent,
        }));

        setBlogs(parsedBlogs);
        setLoading(false);
      } catch (err) {
        setError("Failed to load blogs. Please try again later.");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-container">
      <h2 className="blog-title">Latest Wedding Blogs</h2>

      {loading && <p className="loading-text">Loading blogs...</p>}
      {error && <p className="error-text">{error}</p>}

      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <h3 className="blog-heading">
              <a href={blog.link} target="_blank" rel="noopener noreferrer">
                {blog.title}
              </a>
            </h3>
            <p className="blog-snippet">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
