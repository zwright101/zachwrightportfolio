import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/home';

  return (
    <footer className={`footer ${isLandingPage ? 'footer-landing' : ''}`}>
      &copy; Zachary Wright
    </footer>
  );
}

export default Footer;
