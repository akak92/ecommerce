import {Link} from "react-router-dom"
import CartWidget from '../../common/CartWidget/CartWidget';
import './NavBar.css';
import logo from '../../../assets/logo_tienda.png';

function NavBar() {
  return (
    <nav className="navbar">
        <div className="logo">
        <Link to="/">
        <img src={logo} alt="Logo de Mi Tienda" className="logo-img" />
        </Link>
        <span className="store-name">Mi Tienda</span>
      </div>
      
      <ul className="nav-links">
        <Link to="/">Todo</Link>
        <Link to="/category/monitor">Monitores</Link>
        <Link to="/category/keyboard">Teclados</Link>
        <Link to="/category/mouse">Mouse</Link>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;