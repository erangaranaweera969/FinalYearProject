import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Ensure Link is imported correctly
import "./Chatbot.css";
import chatbotIcon from "../../assets/chatbot.jpg";
import logo from "../../assets/Logo.png";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessages = [...messages, { sender: "user", text: inputMessage }];
    setMessages(newMessages);
    setInputMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userMessage: inputMessage }),
      });

      const data = await response.json();
      setMessages([...newMessages, { sender: "bot", text: data.botReply }]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setMessages([...newMessages, { sender: "bot", text: "Error connecting to chatbot." }]);
    }
    setLoading(false);
  };

  return (
    <div className="chatbot-page">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="logo">
          <img src={logo} alt="Language Master Logo" />
          <h1>Language Master</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/lessons">Lessons</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/chatbot">Chatbot</Link></li>
          <li><Link to="/login-signup">Login/Sign Up</Link></li>
        </ul>
      </nav>

      {/* Centered Chatbot Container */}
      <div className="chatbot-container">
        {/* Chatbot Header */}
        <div className="chatbot-header">
          <img src={chatbotIcon} alt="Chatbot" className="chatbot-icon" />
          <h2>Language Master Chatbot</h2>
        </div>

        {/* Chat Window */}
        <div className="chat-window">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {loading && <div className="chat-message bot">Typing...</div>}
        </div>

        {/* Input Box */}
        <div className="chat-input-container">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
