import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductFinder from "./pages/ProductFinder";
import ProductDetail from "./pages/ProductDetail";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <main style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<ProductFinder />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
