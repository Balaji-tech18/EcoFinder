// src/pages/Contact.jsx
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await addDoc(collection(db, "feedback"), {
        ...form,
        created: Timestamp.now()
      });
      setStatus("Thank you for your feedback!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact / Feedback</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />
        <button type="submit">Send</button>
        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
