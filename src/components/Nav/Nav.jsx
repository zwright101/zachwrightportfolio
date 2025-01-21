import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);
  const location = useLocation();

  // Check if the current route is the landing page
  const isLandingPage = location.pathname === '/home';

  return (
    <div className={`nav ${isLandingPage ? 'nav-vertical' : 'nav-horizontal'}`}>
      {isLandingPage && (
        <div className="nav-pic">
          <img src="/public/ProfilePic.jpg" alt="Profile" />
        </div>
      )}
      <h2 className={`nav-title ${isLandingPage ? 'centered-title' : ''}`}>
        ZacharyWright.io
      </h2>
      <div className={`nav-links ${isLandingPage ? 'nav-links-vertical' : ''}`}>
        {!user.id && (
          <Link className="navLink" to="/home">
            Home
          </Link>
        )}
        <Link className="navLink" to="/resume">
          Resume
        </Link>
        <Link className="navLink" to="/portfolio">
          Portfolio
        </Link>
        <Link className="navLink" to="/blog">
          Blog
        </Link>
        <Link className="navLink" to="/contact">
          Contact Me!
        </Link>
      </div>
    </div>
  );
}

export default Nav;
