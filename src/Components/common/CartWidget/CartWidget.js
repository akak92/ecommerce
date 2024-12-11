import {Link} from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

function CartWidget() {

  const {getTotalElements} = useContext(CartContext);
  let totalElements = getTotalElements()
  return (
    <Link to="/cart">
    <div className="cart-widget">
      🛒 <span className="cart-count">{totalElements}</span>
    </div>
    </Link>
  );
}

export default CartWidget;