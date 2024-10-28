import React from 'react';
import NavBar from './Components/NavBar';
import Container from './Components/Container';

function App() {
  return (
    <div>
      <NavBar />
      <Container mensaje="¡Bienvenidos a Mi Tienda!" />
    </div>
  );
}

export default App;