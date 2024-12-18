import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/layouts/NavBar/NavBar";
import Footer from "./Components/layouts/Footer/Footer";
import ItemListContainer from "./Components/pages/ItemListContainer/ItemListContainer";
import Cart from "./Components/pages/Cart/Cart";
import ItemDetail from "./Components/pages/ItemDetail/ItemDetail";
import Checkout from "./Components/pages/Checkout/Checkout";
import { CartContextProvider } from "./context/CartContext";
import { SnackbarProvider } from "notistack";

function App() {
  return <SnackbarProvider maxSnack={3}
  anchorOrigin={{
    vertical: 'top', // Parte superior
    horizontal: 'center', // Centro
  }}>
  <BrowserRouter>
  <CartContextProvider>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/category/:name" element={<ItemListContainer />} />
      <Route path="/cart" element={<Cart />}/>
      <Route path="/itemDetail/:id" element={<ItemDetail />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
    <Footer />
    </CartContextProvider>
  </BrowserRouter>
  </SnackbarProvider>
}

export default App;