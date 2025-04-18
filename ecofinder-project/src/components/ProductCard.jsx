// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product, onAddToFavorites, onRemoveFromFavorites, isFavorite }) {
  const handleFavoriteClick = () => {
    if (isFavorite) {
      onRemoveFromFavorites(product);
    } else {
      onAddToFavorites(product);
    }
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
     
      <Link
  to={`/product/${product.id}`}
  className="view-details-button"
>
  View Details
</Link>

      {/* Favorite button (heart) with hover effect */}
      <div
        className="heart-button"
        onClick={handleFavoriteClick}
        style={{
          cursor: "pointer",
          fontSize: "24px",
          color: isFavorite ? "red" : "gray",
          marginTop: "10px",
        }}
        title={isFavorite ? "Remove from favorites" : "Add to favorites"} // Tooltip
      >
        ♥
      </div>
    </div>
  );
}

export default ProductCard;
