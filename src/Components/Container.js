import React from 'react';
import './Container.css';

function Container({ mensaje }) {
  return (
    <div className="container">
      <h2>{mensaje}</h2>
      {/* Aquí se mostrarán los productos en el futuro */}
    </div>
  );
}

export default Container;