import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import { Navbar } from './components/Navbar.jsx';
import { Episodes } from './components/Episodes.jsx';
import { About } from './components/About.jsx';
import { PrayerRequests } from './components/PrayerRequests.jsx';
import { Contact } from './components/Contact.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import TermsOfService from './components/TermsOfService.jsx';
import { Footer } from './components/Footer.jsx';
import DonationSection from './components/DonationSection';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(darkModePreference);
    if (darkModePreference) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', !isDarkMode);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          Dark Mode
        </button>
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Episodes />
                <About />
                <PrayerRequests />
                <Contact />
                <DonationSection />
              </>
            } />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
