import React from 'react';
import './NavBar.css';
import logo from '../assets/logo_tienda.png';
function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="store-name"> MiTienda</span>
      </div>
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