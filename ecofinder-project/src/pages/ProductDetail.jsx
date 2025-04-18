import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Sample product data
const mockProducts = [
  {
    id: "1",
    name: "Reusable Water Bottle",
    description: "Eco-friendly, BPA-free, stainless steel bottle. Keeps drinks hot or cold for hours.",
    image: "https://cpimg.tistatic.com/08490668/b/4/450ML-STAINLESS-STEEL-WATER-BOTTLE-WITH-RING-CAP-FOR-MEN-WOMEN-KIDS-THERMOS-FLASK-REUSABLE-LEAK-PROOF-THERMOS-STEEL-FOR-HOME-OFFICE-GYM-FRIDGE-TRAVELLING-6450-.jpg",
    category: "Reusable",
  },
  {
    id: "2",
    name: "Bamboo Toothbrush",
    description: "100% biodegradable handle and eco packaging.",
    image: "https://toystorey.in/wp-content/uploads/2023/02/Bamboo-Toothbrush-C-Shaped-5-scaled-1.jpg",
    category: "Biodegradable",
  },
  {
    id: "3",
    name: "Recycled Notebook",
    description: "Made from 100% recycled paper, ideal for eco-conscious students.",
    image: "https://grewind.com/wp-content/uploads/2022/07/Notebook-2-scaled.jpg",
    category: "Recyclable",
  },
];

function ProductDetail() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // State for product details

  // Always call useEffect and useState in the same order
 // Re-run whenever the product ID changes
  useEffect(() => {
    console.log(id); // Log the product ID from the URL
    const foundProduct = mockProducts.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);
  
  // If product data is not yet loaded
  if (!product) {
    return <p>Loading product details...</p>;
  }

  // Render product details once the product is found
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: "auto", marginBottom: "1rem" }}
      />
      <h2>{product.name}</h2>
      <p><strong>Category:</strong> {product.category}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;
