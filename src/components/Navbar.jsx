import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add smooth scrolling effect with element existence check
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

    // Cleanup function to remove event listeners
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
          <li><a href="#episodes">Episodes</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#prayer-requests">Prayer Requests</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#donations">Support Us</a></li>
        </ul>
      </nav>
    </header>
  );
};
