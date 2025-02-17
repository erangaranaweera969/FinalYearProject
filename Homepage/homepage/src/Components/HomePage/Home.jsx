import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css';
import logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <header className="custom-header">
      <div className="custom-logo">
        <img src={logo} alt="LanguageMaster Logo" />
        <h1>Language Master</h1>
      </div>
      <nav className="custom-nav">
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/lessons">Lessons</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/chatbot">Chatbot</Link></li>
          <li><Link to="/login-signup">Sign Up / Login</Link></li> {/* ✅ Corrected Link */}
        </ul>
      </nav>
      <div className="custom-language-selection">
        <select>
          <option>English</option>
          <option>Español</option>
          <option>Français</option>
          <option>中文</option>
        </select>
      </div>
    </header>
  );
};

const MainBanner = () => {
  return (
    <section className="custom-main-banner">
      <div className="custom-banner-content">
        <h2>Master Languages with Interactive Chatbot & Speech Recognition</h2>
        <p>Practice Spanish, French, or Chinese with real-time feedback on your pronunciation.</p>
        <Link to="/login-signup"> {/* ✅ Now properly linked */}
          <button className="cta-button">Start Learning Now</button>
        </Link>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="custom-features">
      <div className="custom-feature">
        <h3>Speech Recognition</h3>
        <p>Enhance your pronunciation with real-time feedback.</p>
      </div>
      <div className="custom-feature">
        <h3>Interactive Lessons</h3>
        <p>Engage in immersive lessons for a better learning experience.</p>
      </div>
      <div className="custom-feature">
        <h3>Progress Tracker</h3>
        <p>Track your language learning progress every step of the way.</p>
      </div>
      <div className="custom-feature">
        <h3>Gamified Learning</h3>
        <p>Make learning fun with achievements and challenges.</p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="custom-footer">
      <ul>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/terms-of-service">Terms of Service</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
      <div className="custom-social-media">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div>
      <Header />
      <MainBanner />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;