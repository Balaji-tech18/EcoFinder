// src/pages/FavoritesPage.jsx
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard"; // Assuming ProductCard is in components
import "./FavoritesPage.css"; // Import the CSS file for Favorites Page

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  // Fetch favorites from localStorage when the component mounts
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleRemoveFromFavorites = (product) => {
    const newFavorites = favorites.filter((item) => item.id !== product.id);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <div className="favorites-container">
      <h2>Your Favorite Products</h2>

      <div>
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onRemoveFromFavorites={handleRemoveFromFavorites}
              isFavorite={true} // Indicates this product is a favorite
            />
          ))
        ) : (
          <p>You have no favorite products yet.</p>
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;
