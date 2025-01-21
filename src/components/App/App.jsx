import React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage'; // Rename or replace with a portfolio-related page
import InfoPage from '../InfoPage/InfoPage'; // Rename or replace with a portfolio-related page
import LandingPage from '../LandingPage/LandingPage';
import ResumePage from '../Resume/resume';
import Portfolio from '../Portfolio/Portfolio';
import ContactMe from '../ContactMe/ContactMe';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Redirect / to /home */}
          <Redirect exact from="/" to="/home" />

          {/* Public routes */}
          <Route exact path="/home">
            <LandingPage />
          </Route>

          <Route exact path="/about">
            <AboutPage />
          </Route>

          <Route exact path="/portfolio">
            <Portfolio /> {/* Replace with your portfolio page */}
          </Route>

          <Route exact path="/resume">
            <ResumePage />
          </Route>

          <Route exact path="/contact">
            <ContactMe /> {/* Replace with your contact page */}
          </Route>

          {/* 404 Page */}
          <Route>
            <h1>404 - Page Not Found</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
