import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
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
          <a href="./" onClick={toggleMenu}>Home</a>
          <a href="./Play" onClick={toggleMenu}>Play</a>
          <a href="./Profile" onClick={toggleMenu}>Profile</a>
          <a href="./Friends" onClick={toggleMenu}>Friends</a>
          <a href="./messages" onClick={toggleMenu}>Messages</a>
          <a href="./MatchHistory" onClick={toggleMenu}>Match History</a>
          <a href="./GamesHappeningSoon" onClick={toggleMenu}>Games Happening Soon</a>
          <a href="./AboutUs" onClick={toggleMenu}>About Us</a>
          <a href="./logout" onClick={toggleMenu}>Logout</a>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
