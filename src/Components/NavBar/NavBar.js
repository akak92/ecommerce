import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import logo from '../../assets/logo_tienda.png';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo de Mi Tienda" className="logo-img" />
        <span className="store-name">Mi Tienda</span>
      </div>
      <ul className="nav-links">
        <li><a href="#inicio" className="link">Inicio</a></li>
        <li><a href="#productos" className="link">Productos</a></li>
        <li><a href="#quienes-somos" className="link">¿Quienes somos?</a></li>
        <li><a href="#contacto" className="link">Contacto</a></li>
        
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;