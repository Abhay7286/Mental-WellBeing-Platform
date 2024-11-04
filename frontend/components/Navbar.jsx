import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">CalmCircle</div>
      <div className="menu">
        <a href="/about">Who we are</a>
        <a href="/profile">My profile</a>
        <a href="/login" className="login-button">Log-in</a>
      </div>
    </nav>
  );
};

export default Navbar;
