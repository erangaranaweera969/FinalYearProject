import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Maindashboard.css";

// Update these paths to match your actual assets folder
import profilePic from "../../assets/profile.jpg";
import chatbotIcon from "../../assets/chatbot.jpg";

function Maindashboard() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();

  // Dummy data for progress
  const progressPercent = 45; // Example progress
  const challengesCompleted = 12;
  const points = 230;
  const achievements = ["Beginner Badge", "Week Streak: 5"];

  return (
    <div className="dashboardContainer">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profileSection">
          <img src={profilePic} alt="Profile" className="profilePic" />
          <h3 className="profileName">Eranga</h3>
        </div>
        <nav className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/lessons">Lessons</Link>
          <Link to="/games">Games</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/login-signup">Sign Up/Login</Link>
          <a
            href="#notifications"
            onClick={() => setNotificationsOpen(!notificationsOpen)}
          >
            Notifications
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="mainContent">
        {/* Welcome Banner */}
        <div className="welcomeBanner">
          <h1>Good Morning, Eranga!</h1>
          <p>Ready to enhance your language skills?</p>
        </div>

        {/* Current Learning Status & Progress */}
        <div className="learningStatus">
          <div className="progressBarContainer">
            <span>Current Course Progress:</span>
            <div className="progressBar">
              <div
                className="progressFill"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <span>{progressPercent}% Completed</span>
          </div>
        </div>

        {/* Suggested Lesson / Chatbot Section */}
        <div className="chatbotSection">
          <img src={chatbotIcon} alt="Chatbot" className="chatbotIcon" />
          <div className="chatbotPrompt">
            <h2>Let’s practice a conversation in French!</h2>
            <button className="chatbotButton" onClick={() => navigate("/chatbot")}>Open Chatbot</button>
          </div>
        </div>

        {/* Learning Progress / Chart Placeholder */}
        <div className="chartsContainer">
          <div className="chartBox">
            <h3>Pronunciation Accuracy</h3>
            <div className="chartPlaceholder">Chart Placeholder</div>
          </div>
          <div className="chartBox">
            <h3>Completion Rates</h3>
            <div className="chartPlaceholder">Chart Placeholder</div>
          </div>
        </div>

        {/* Gamification Stats */}
        <div className="gamificationStats">
          <h3>Recent Achievements</h3>
          <ul>
            {achievements.map((ach, index) => (
              <li key={index}>{ach}</li>
            ))}
          </ul>
          <p>
            You’ve completed <strong>{challengesCompleted}</strong> challenges and
            earned <strong>{points}</strong> points so far!
          </p>
        </div>
      </main>

      {/* Notification Panel (Popup or Slide-in) */}
      {notificationsOpen && (
        <div className="notificationsPanel">
          <h4>Notifications</h4>
          <ul>
            <li>You have a new lesson available.</li>
            <li>Reminder: Practice your spoken Spanish today!</li>
            <li>New badge: 5-Day Streak!</li>
          </ul>
          <button onClick={() => setNotificationsOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Maindashboard;
