import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/layouts/NavBar/NavBar"
import ItemListContainer from "./Components/pages/ItemListContainer/ItemListContainer";
import Cart from "./Components/pages/Cart/Cart";
import ItemDetail from "./Components/pages/ItemDetail/ItemDetail";

function App() {
  return <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/category/:name" element={<ItemListContainer />} />
      <Route path="/cart" element={<Cart />}/>
      <Route path="/itemDetail/:id" element={<ItemDetail />} />
    </Routes>
  </BrowserRouter>
}

export default App;