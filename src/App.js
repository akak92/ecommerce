import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenidos a Mi Tienda!" />
    </div>
  );
}

export default App;