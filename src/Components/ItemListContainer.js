import React from 'react';

function ItemListContainer({ mensaje }) {
  return (
    <div className="item-list-container">
      <h2>{mensaje}</h2>
      {/* Aquí se mostrarán los productos en el futuro */}
    </div>
  );
}

export default ItemListContainer;