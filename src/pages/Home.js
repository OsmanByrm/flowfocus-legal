import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="content">
        <header>
          <img src="/logo/AppIcon.png" alt="Flow Focus App Logo" className="logo" />
          <h1>Flow Focus App</h1>
          <p className="subtitle">Boost your productivity with focused work sessions</p>
        </header>
        
        <div className="app-description">
          <p>Flow Focus App helps you stay productive using the Pomodoro technique and other focus methods. 
          Manage your time effectively, track your progress, and achieve more in less time.</p>
        </div>
        
        <div className="buttons">
          <Link to="/privacy-policy" className="button">Privacy Policy</Link>
          <Link to="/terms-of-service" className="button">Terms of Service</Link>
        </div>
        
        <footer>
          <p>&copy; {new Date().getFullYear()} Flow Focus App. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Home; 