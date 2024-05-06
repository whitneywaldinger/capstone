import React from 'react';
import "./menu.css"

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className="hamburger-menu" onClick={toggleMenu}>
      <div className={isOpen ? "bar bar1 open" : "bar bar1"}></div>
      <div className={isOpen ? "bar bar2 open" : "bar bar2"}></div>
      <div className={isOpen ? "bar bar3 open" : "bar bar3"}></div>
    </div>
  );
};

export default HamburgerMenu;