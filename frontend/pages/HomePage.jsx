import React from 'react';
import './HomePage.css';
import homeimg from '../public/homeimg.png'

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>CalmCircle<br/>Share. Connect. Heal<br/>Together in CalmCircle</h2>
      <a href="/login" className="login-button">Log-in</a>

      <div className="home-image">
        <img src={homeimg} alt="homeimg" />
      </div>
    </div>
  );
};

export default HomePage;