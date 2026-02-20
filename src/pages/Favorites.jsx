import React, { useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Navbar from "../Componants/Navbar";

const Favorites = () => {
  const [posts, setPosts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setFavorites(savedFavorites);
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch("http://localhost:3000/posts");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = (postId) => {
    const updatedFavorites = favorites.filter(
      (id) => id !== postId
    );

    setFavorites(updatedFavorites);
    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  const clearAllFavorites = () => {
    localStorage.setItem("favorites", JSON.stringify([]));
    setFavorites([]);
  };

  const favoritePosts = posts.filter((post) =>
    favorites.includes(post.id)
  );

  return (
    <>
      <Navbar />

      <div style={{ padding: "40px", minHeight: "100vh" }}>
        <h2 style={{ marginBottom: "20px" }}>
          ⭐ My Favorites ({favoritePosts.length})
        </h2>

        {favoritePosts.length > 0 && (
          <button
            onClick={clearAllFavorites}
            style={{
              marginBottom: "20px",
              padding: "8px 15px",
              cursor: "pointer",
              borderRadius: "8px",
              border: "none",
              background: "#e74c3c",
              color: "white",
            }}
          >
            <MdDeleteSweep /> Clear All
          </button>
        )}

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {favoritePosts.map((post) => (
            <div
              key={post.id}
              style={{
                width: "300px",
                background: "#34495e",
                color: "white",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <img
                src={
                  post.imageUrl ||
                  "https://via.placeholder.com/300"
                }
                alt={post.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px" }}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>

                <button
                  onClick={() =>
                    navigate(`/post-detail/${post.id}`)
                  }
                  style={{
                    marginTop: "10px",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Open
                </button>

                <button
                  onClick={() => removeFavorite(post.id)}
                  style={{
                    marginLeft: "10px",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    background: "#e74c3c",
                    color: "white",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {favoritePosts.length === 0 && (
          <p style={{ marginTop: "30px" }}>
            No favorites yet.
          </p>
        )}
      </div>
    </>
  );
};

export default Favorites;