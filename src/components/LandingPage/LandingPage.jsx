import React from 'react';
import './LandingPage.css';
import Footer from '../Footer/Footer';

function LandingPage() {
  return (
    <div className="landing-container">
      <header>
        <h1 className="landing-title">ZacharyWright.io</h1>
      </header>
      <main>
        <section className="about-section">
          <h2>About Me</h2>
          <p>
          Hi! I'm Zach Wright, a detail-oriented technical professional with a 
          passion for continuous learning and innovation in the software enginnering
          and tech world. As a full stack developer, I love the prospect of being able
          to build anything I love with technology
          </p>

          <p>
          As a graduate from Prime Digital Academy's Full Stack Software Engineering bootcamp, I
          was able to hone my skills in JavaScript, React, Node.js, and PostgreSQL. It's been enjoyable
          to continue learning languages, frameworks, libraries, concepts, and more fundamentals. I'm 
          working towards my first real world work experience in programming and believe I have the 
          capibality and the confidence to learn what I need to in order to be a successful asset to any
          team
          </p>

          <p>
          Outside of programming, I'm a massive nerd. I love all things video games, comic books, movies, 
          television shows, and of course spinning vinyl on my record player. I am in early stages of launching
          a podcast with a friend called Nerding Casually, where the main topic of conversation is all things nerd!
          I like to think I'm an incredibly loyal person, as evidenced by my continued support of Minnesota sports
          and Tottenham Hotspur. I have a German Shephard named Chibs who likes to keep me busy and I love spending 
          time talking and spending time with my friends and family. 
          </p>

          <p>
          If you have any other questions or would like to know more or to follow my work, check out my links 
          and come follow along! Let's build something amazing together! 
          </p>
          {/* Add the rest of your "About Me" content here */}
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
