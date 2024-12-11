import {Link} from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

function CartWidget() {

  const {cart} = useContext(CartContext);
  return (
    <Link to="/cart">
    <div className="cart-widget">
      🛒 <span className="cart-count">{cart.length}</span>
    </div>
    </Link>
  );
}

export default CartWidget;