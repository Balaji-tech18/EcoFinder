// src/components/Header.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "./Header.css";

function Header({ user }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>EcoFinder🌿</div>
      <nav className="nav-links">
        {user ? (
          <>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/favorites" className="nav-item">Favorites</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-item">Login</Link>
            <Link to="/signup" className="nav-item">Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
