import React, { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today? Ask me about eco-friendly products!", isUser: false }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isVisible, setIsVisible] = useState(false); // State to control chatbot visibility

  // Function to handle user input
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  // Function to send the message
  const sendMessage = () => {
    if (userInput.trim() !== "") {
      // User message
      const userMessage = { text: userInput, isUser: true };
      setMessages([...messages, userMessage]);

      // Bot response based on user input
      let botResponse = "";
      if (userInput.toLowerCase().includes("eco-friendly")) {
        botResponse = "We have a variety of eco-friendly products like organic shampoos, reusable bags, and sustainable clothing!";
      } else if (userInput.toLowerCase().includes("what is ecofinder")) {
        botResponse = "EcoFinder helps you find sustainable and eco-friendly products that are good for the environment.";
      } else if (userInput.toLowerCase().includes("recommend")) {
        botResponse = "I recommend checking out our eco-friendly home cleaning products and organic skincare range!";
      } else if (userInput.toLowerCase().includes("hii")) {
        botResponse = "Hii,How can I assist u?";
      } 
      else {
        botResponse = "I'm sorry, I didn't understand that. Please ask something about eco-friendly products!";
      }

      // Bot message
      setTimeout(() => {
        const botMessage = { text: botResponse, isUser: false };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }, 1000);

      setUserInput("");
    }
  };

  // Function to toggle the visibility of the chatbot
  const toggleChatbot = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {/* Toggle Chatbot Button */}
      <button className="chatbot-toggle-btn" onClick={toggleChatbot}>
        🗨️
      </button>

      {/* Chatbot Window */}
      {isVisible && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            Eco Buddy
            <button className="close-btn" onClick={toggleChatbot}>X</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chatbot-message ${message.isUser ? "user-message" : "bot-message"}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={userInput}
              onChange={handleUserInput}
              placeholder="Ask me something..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
