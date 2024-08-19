import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="https://abstract.com/logo.png" alt="Abstract Logo" className="logo" />
        <span>Help Center</span>
      </div>
      <div className="header-right">
        <button className="request-button">Submit a request</button>
      </div>
    </header>
  );
}

export default Header;
