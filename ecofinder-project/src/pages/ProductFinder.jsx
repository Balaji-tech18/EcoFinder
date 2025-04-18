import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const allProducts = [
  {
    id: "1",
    name: "Reusable Water Bottle",
    description: "Eco-friendly, BPA-free, stainless steel.",
    image: "https://cpimg.tistatic.com/08490668/b/4/450ML-STAINLESS-STEEL-WATER-BOTTLE-WITH-RING-CAP-FOR-MEN-WOMEN-KIDS-THERMOS-FLASK-REUSABLE-LEAK-PROOF-THERMOS-STEEL-FOR-HOME-OFFICE-GYM-FRIDGE-TRAVELLING-6450-.jpg",
    category: "Reusable",
  },
  {
    id: "2",
    name: "Bamboo Toothbrush",
    description: "100% biodegradable bamboo handle.",
    image: "https://toystorey.in/wp-content/uploads/2023/02/Bamboo-Toothbrush-C-Shaped-5-scaled-1.jpg",
    category: "Biodegradable",
  },
  {
    id: "3",
    name: "Recycled Notebook",
    description: "Made from 100% post-consumer paper.",
    image: "https://grewind.com/wp-content/uploads/2022/07/Notebook-2-scaled.jpg",
    category: "Recyclable",
  },
];

function ProductFinder() {
  const [products, setProducts] = useState(allProducts);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleAddToFavorites = (product) => {
    if (!favorites.some((item) => item.id === product.id)) {
      const newFavorites = [...favorites, product];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };

  const handleRemoveFromFavorites = (product) => {
    const newFavorites = favorites.filter((item) => item.id !== product.id);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  useEffect(() => {
    let filtered = allProducts;

    // Search functionality
    if (search) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter functionality
    if (filter) {
      filtered = filtered.filter((p) => p.category === filter);
    }

    setProducts(filtered);
  }, [search, filter]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Find Eco-Friendly Products</h2>

      {/* Search and Filter Inputs */}
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "0.5rem",
            marginRight: "1rem",
            width: "200px",
          }}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: "0.5rem" }}
        >
          <option value="">All Categories</option>
          <option value="Reusable">Reusable</option>
          <option value="Biodegradable">Biodegradable</option>
          <option value="Recyclable">Recyclable</option>
        </select>
      </div>

      {/* Display Products */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.length > 0 ? (
          products.map((product) => {
            const isFavorite = favorites.some((item) => item.id === product.id);
            return (
              <ProductCard
                key={product.id}
                product={product}
                onAddToFavorites={handleAddToFavorites}
                onRemoveFromFavorites={handleRemoveFromFavorites}
                isFavorite={isFavorite}
              />
            );
          })
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductFinder;
