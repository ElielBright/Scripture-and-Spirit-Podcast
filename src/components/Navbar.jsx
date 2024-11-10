import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPodcast, FaInfoCircle, FaPrayingHands, FaEnvelope, FaDonate, FaUser } from 'react-icons/fa';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const links = document.querySelectorAll('.nav-list li a');
    const handleClick = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        setIsMenuOpen(false);
      }
    };

    links.forEach(link => link.addEventListener('click', handleClick));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="img/podcastapplogo2-removebg-preview.png" alt="Bible Fellowship Podcast Logo" />
          <Link to="/">
            <h1 className="logo">Scripture and Spirit</h1>
          </Link>
        </div>
        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} id="mobile-menu" onClick={handleMenuToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`} id="nav-list">
          <li>
            <a href="#episodes">
              <FaPodcast className="nav-icon" /> Episodes
            </a>
          </li>
          <li>
            <a href="#about">
              <FaInfoCircle className="nav-icon" /> About Us
            </a>
          </li>
          <li>
            <a href="#prayer-requests">
              <FaPrayingHands className="nav-icon" /> Prayer Requests
            </a>
          </li>
          <li>
            <a href="#contact">
              <FaEnvelope className="nav-icon" /> Contact
            </a>
          </li>
          <li>
            <a href="#donations">
              <FaDonate className="nav-icon" /> Support Us
            </a>
          </li>
          <li>
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <FaUser className="nav-icon" /> Sign Up / Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
