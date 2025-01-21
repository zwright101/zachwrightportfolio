import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import './Nav.css';

function Nav() {
  const user = useSelector((store) => store.user);
  const location = useLocation();
  const isLandingPage = location.pathname === '/' || location.pathname === '/home';

  console.log('Current Path:', location.pathname);
  console.log('Is Landing Page:', isLandingPage);

  return (
    <div className={`nav ${isLandingPage ? 'nav-vertical' : 'nav-horizontal'}`}>
      {isLandingPage && (
        <div className="nav-pic">
          <img src="/public/ProfilePic.jpg" alt="Profile" />
        </div>
      )}
      <div className={`nav-links ${isLandingPage ? 'nav-links-vertical' : ''}`}>
        {!user.id && (
          <Button
            component={Link}
            to="/home"
            variant="contained"
            color="primary"
            className="navLink"
          >
            Home
          </Button>
        )}
        <Button
          component={Link}
          to="/resume"
          variant="contained"
          color="primary"
          className="navLink"
        >
          Resume
        </Button>
        <Button
          component={Link}
          to="/portfolio"
          variant="contained"
          color="primary"
          className="navLink"
        >
          Portfolio
        </Button>
        <Button
          component={Link}
          to="/blog"
          variant="contained"
          color="primary"
          className="navLink"
        >
          Blog
        </Button>
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          color="primary"
          className="navLink"
        >
          Contact Me!
        </Button>
      </div>
    </div>
  );
}

export default Nav;
