// Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
     <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/films">Films</a></li>
        <li><a href="/nouveautes">Nouveautés</a></li>
        <li><a href="/a-propos">À propos</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
