import React, { useState } from "react";
import "./menuouvrant.css";
import logomenuouvrant from "../../images/logochantalvivent.png";
const MenuOuvrant = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu-container">
      <div
        className={`menu-icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`menu-nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="ulMenuOuvrant">
          <div
            className={`menu-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <li>
            <a href="/">
              <span>Menu principal</span>
            </a>
          </li>
          <li>
            <a href="/pagemenu1">
              <span>Mes prestations</span>
            </a>
          </li>
          <li>
            <a href="/contact">
              <span>Me contacter</span>
            </a>
          </li>
          <a href="/leblog">
            <span>Qui suis-je </span>
          </a>
          <li>
            <a className="aEnSavoirPlus" href="/mentionslegales">
              <span className="spanEnSavoirPlus">Mentions Légales</span>
            </a>
          </li>
        </ul>
        <div className="filtreMenuOuvrant">
          <img
            className="logoMenuLaPizzeria"
            src={logomenuouvrant}
            alt="img logo pizzeria"
          />
        </div>
      </nav>
    </div>
  );
};

export default MenuOuvrant;
