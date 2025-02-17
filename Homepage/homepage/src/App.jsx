import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/HomePage/Home'; // Correct path
import LoginSignup from './Components/Login-SignUp/LoginSignup';
import Maindashboard from './Components/Dashboard/Maindashboard';
import LessonsPage from './Components/Lessons/LessonsPage';
import Chatbot from './Components/ChatBot/Chatbot';
import FrenchQuiz from './Components/Quizes/FrenchQuiz';
import SpanishQuiz from './Components/Quizes/SpanishQuiz';
import ItalianQuiz from './Components/Quizes/ItalianQuiz';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/login-signup" element={<LoginSignup/>}/>
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/dashboard" element={<Maindashboard />}/>
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/french-quiz" element={<FrenchQuiz />} /> 
        <Route path="/spanish-quiz" element={<SpanishQuiz />}/>
        <Route path="/italian-quiz" element={<ItalianQuiz />}/>
      </Routes>
    </Router>
  );
}

export default App;
