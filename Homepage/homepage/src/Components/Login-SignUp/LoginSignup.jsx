import React, { useState } from "react";
import "./LoginSignup.css";

// Correct paths for images
import user_icon from "../../assets/person.jpg";
import email_icon from "../../assets/email.jpg";
import password_icon from "../../assets/person.jpg";
import logo from "../../assets/Logo.png"; // Add your logo image here

const LoginSignup = () => {
    const [isSignUp, setIsSignUp] = useState(true); // State to toggle between Sign Up and Login forms

    return (
        <div className="login-signup-container">
            {/* Logo and Website Name */}
            <div className="header">
                <img src={logo} alt="Website Logo" className="logo" />
                <h1 className="website-name">Language Master</h1>
            </div>

            {/* Form Section */}
            <div className="form-container">
                {/* Tabs */}
                <div className="form-header">
                    <div className={`tab ${isSignUp ? "active" : ""}`} onClick={() => setIsSignUp(true)}>
                        Sign Up
                    </div>
                    <div className={`tab ${!isSignUp ? "active" : ""}`} onClick={() => setIsSignUp(false)}>
                        Login
                    </div>
                </div>

                {/* Form Inputs */}
                <div className="form-inputs">
                    {isSignUp && (
                        <div className="input-group">
                            <img src={user_icon} alt="User Icon" />
                            <input type="text" placeholder="Name" />
                        </div>
                    )}
                    <div className="input-group">
                        <img src={email_icon} alt="Email Icon" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="input-group">
                        <img src={password_icon} alt="Password Icon" />
                        <input type="password" placeholder="Password" />
                    </div>
                </div>

                {/* Forgot Password */}
                {!isSignUp && (
                    <div className="forgot-password">
                        Forgot Password? <span>Click Here!</span>
                    </div>
                )}

                {/* Submit Button */}
                <button className="submit-button">{isSignUp ? "Sign Up" : "Login"}</button>
            </div>
        </div>
    );
};

export default LoginSignup;
