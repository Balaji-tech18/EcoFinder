// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import './App.css';
import './index.css';


import Contact from "./pages/Contact";
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductFinder from "./pages/ProductFinder";
import FavoritesPage from "./pages/FavoritesPage";
import ProductDetail from "./pages/ProductDetail"; // Import ProductDetail
import Chatbot from "./components/Chatbot"; // Import the Chatbot component

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Header user={user} />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={user ? <ProductFinder user={user} /> : <Navigate to="/login" />} />
        <Route path="/favorites" element={user ? <FavoritesPage user={user} /> : <Navigate to="/login" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      {/* Add the Chatbot here */}
      <Chatbot />
    </Router>
  );
}

export default App;
