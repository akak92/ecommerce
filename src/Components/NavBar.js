import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">Mi Tienda</div>
      <ul className="navLinks">
        <li><a href="#inicio" className="link">Inicio</a></li>
        <li><a href="#productos" className="link">Productos</a></li>
        <li><a href="#contacto" className="link">Contacto</a></li>
      </ul>
      <div className="cart">
        🛒 <span className="cartCount">0</span>
      </div>
    </nav>
  );
}

export default NavBar;