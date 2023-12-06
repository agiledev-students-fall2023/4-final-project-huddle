import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      {isOpen && (
        <div className="menu-list">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/Play" onClick={toggleMenu}>Play</Link>
          <Link to="/Profile" onClick={toggleMenu}>Profile</Link>
          <Link to="/Friends" onClick={toggleMenu}>Friends</Link>
          <Link to="/messages" onClick={toggleMenu}>Messages</Link>
          <Link to="/MatchHistory" onClick={toggleMenu}>Match History</Link>
          <Link to="/GamesHappeningSoon" onClick={toggleMenu}>Games Happening Soon</Link>
          <Link to="/AboutUs" onClick={toggleMenu}>About Us</Link>
          <Link to="/logout" onClick={toggleMenu}>Logout</Link>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
