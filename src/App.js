import React from 'react';
import NavBar from './Components/NavBar';
import Container from './Components/Container';

function App() {
  return (
    <div>
      <NavBar />
      <Container mensaje="¡Bienvenidos a mi tienda online!" />
    </div>
  );
}

export default App;