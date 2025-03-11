import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.css"; // Ensure CSS file exists

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* 📞 Contact Info */}
                <div className="footer-contact">
                    <h3>Get in Touch</h3>
                    <p><FaEnvelope className="icon" /> formywebsite0000@gmail.com</p>
                    <p><FaPhone className="icon" /> +91 987-654-3211</p>
                </div>

                {/* 🌐 Social Media Icons */}
                <div className="social-icons">
    <h3>Follow Us</h3>
    <a href="https://www.linkedin.com/in/indrajith-m-5540a3200" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
    <a href="https://www.linkedin.com/in/indrajith-m-5540a3200" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    <a href="https://www.linkedin.com/in/indrajith-m-5540a3200" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    <a href="https://www.linkedin.com/in/indrajith-m-5540a3200" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
</div>

            </div>

            {/* 📌 Copyright Section */}
            <div className="footer-text">
                <p>&copy; {new Date().getFullYear()} News Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
