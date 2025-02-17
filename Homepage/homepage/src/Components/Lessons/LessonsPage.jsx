import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LessonsPage.css";

// Import assets
import spanishIcon from "../../assets/spanish.png";
import frenchIcon from "../../assets/french.jpg";
import italianIcon from "../../assets/italian.jpg";
import logo from "../../assets/Logo.png"; // ✅ Logo added

// Import react-loader-spinner and confetti
import { Circles } from 'react-loader-spinner'; // Ensure this is installed
import ReactConfetti from 'react-confetti'; // Confetti animation library

// Import react-icons for social media icons
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Correct import

const LessonsPage = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("Spanish");
  const [darkMode, setDarkMode] = useState(false); // For light/dark mode
  const [loading, setLoading] = useState(false); // For loading animation
  const [progress, setProgress] = useState(0); // For tracking progress
  const [completed, setCompleted] = useState(false); // To track if lesson is complete
  const [showConfetti, setShowConfetti] = useState(false); // For confetti animation

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleStartLesson = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Navigate to lesson page
      navigate(`/start-${selectedLanguage.toLowerCase()}`);
    }, 2000); // Simulating loading time
  };

  const handleCompleteLesson = () => {
    setProgress(100); // Mark the lesson as completed
    setCompleted(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Show confetti for 5 seconds
  };

  return (
    <div className={`lessonsContainer ${darkMode ? "dark" : ""}`}>
      {/* Logo in the top left */}
      <div className="lessonsLogo">
        <img src={logo} alt="Language Master Logo" />
      </div>

      {/* Top Section / Page Title */}
      <header className="lessonsHeader">
        <h1>Lessons & Quizzes</h1>
        <p>Select a language and start practicing!</p>
      </header>

      {/* Language Navigation & Lesson Selection */}
      <div className="languageNav">
        <div className="languageCarousel">
          <div
            className="languageTile"
            onClick={() => setSelectedLanguage("Spanish")}
          >
            <img src={spanishIcon} alt="Spanish" />
            <p>Spanish</p>
          </div>
          <div
            className="languageTile"
            onClick={() => setSelectedLanguage("French")}
          >
            <img src={frenchIcon} alt="French" />
            <p>French</p>
          </div>
          <div
            className="languageTile"
            onClick={() => setSelectedLanguage("Italian")}
          >
            <img src={italianIcon} alt="Italian" />
            <p>Italian</p>
          </div>
        </div>

        <div className="lessonList">
          <h2>{selectedLanguage} Lessons</h2>
          <ul>
            <li>Beginner Basics</li>
            <li>Intermediate Grammar</li>
            <li>Advanced Conversation</li>
          </ul>

          {/* Progress Bar */}
          <div className="progressContainer">
            <progress value={progress} max="100" className="progressBar" />
            <span className="progressText">{progress}% Completed</span>
          </div>

          {/* Milestone Completion */}
          {completed && <div className="completionBadge">✔️ Lesson Completed!</div>}

          <button className="startLessonBtn" onClick={handleStartLesson}>
            {loading ? <Circles color="#4682B4" height={30} width={30} /> : "Start Lesson"}
          </button>
          <button className="completeLessonBtn" onClick={handleCompleteLesson}>Complete Lesson</button>
        </div>
      </div>

      {/* Quiz Icons Section */}
      <div className="quizIconsSection">
        <h2>Choose a Quiz</h2>
        <div className="quizIcons">
          <div className="quizIconCard">
            <img src={spanishIcon} alt="Spanish Icon" />
            <button className="quizBtn" onClick={() => navigate("/spanish-quiz")}>
              Spanish Quiz
            </button>
          </div>
          <div className="quizIconCard">
            <img src={frenchIcon} alt="French Icon" />
            <button className="quizBtn" onClick={() => navigate("/french-quiz")}>
              French Quiz
            </button>
          </div>
          <div className="quizIconCard">
            <img src={italianIcon} alt="Italian Icon" />
            <button className="quizBtn" onClick={() => navigate("/italian-quiz")}>
              Italian Quiz
            </button>
          </div>
        </div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && <ReactConfetti />}
      
      {/* Footer Section */}
      <footer className="footer">
        <div className="footerContent">
          <div className="footerInfo">
            <p>Language Master</p>
            <p>123 Language Street</p>
            <p>City, Country</p>
          </div>
          <div className="footerLinks">
            <a href="#">News</a>
            <Link to="/">Home</Link>
            <a href="#">Legal Notice</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footerContact">
            <p>Contact: support@languagemaster.com</p>
            <p>Phone: +123 456 789</p>
          </div>
        </div>

        {/* Social Media Icons Section */}
        <div className="footerSocialIcons">
          <FaFacebookF className="socialIcon" />
          <FaTwitter className="socialIcon" />
          <FaInstagram className="socialIcon" />
          <FaLinkedinIn className="socialIcon" />
        </div>
      </footer>

      {/* Dark Mode Toggle */}
      <button className="themeToggle" onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default LessonsPage;
