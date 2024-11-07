import React from 'react';

export const Footer = () => (
  <footer>
    <p>&copy; 2024 Scripture and Spirit Podcast. All rights reserved.</p>
    
    <div className="social-icons">
      <a href="https://wa.me/+233592331828" target="_blank" rel="noopener" className="icon whatsapp" aria-label="WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>
      
      <a href="https://instagram.com/your-profile" target="_blank" rel="noopener" className="icon instagram" aria-label="Instagram">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
    
    <div className="footer-links">
      <a href="/privacy-policy" className="footer-link">Privacy Policy</a> &nbsp;
      <a href="/terms-of-service" className="footer-link">Terms of Service</a>
    </div>
  </footer>
);
