// src/pages/Login.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0)", // transparent background layer
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          background: "rgba(255, 255, 255, 0.85)", // semi-transparent white
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "400px",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#2e7d32" }}>
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Log In</button>
        <p
          onClick={() => navigate("/signup")}
          style={{
            textAlign: "center",
            marginTop: "1rem",
            color: "#2e7d32",
            cursor: "pointer",
          }}
        >
          Don't have an account? Sign up
        </p>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  marginBottom: "1rem",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "1rem",
};

const buttonStyle = {
  width: "100%",
  padding: "0.75rem",
  backgroundColor: "#81c784",
  border: "none",
  borderRadius: "8px",
  fontSize: "1rem",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Login;
