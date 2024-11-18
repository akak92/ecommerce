import {Link} from "react-router-dom";

function CartWidget() {
  return (
    <Link to="/cart">
    <div className="cart-widget">
      🛒 <span className="cart-count">0</span>
    </div>
    </Link>
  );
}

export default CartWidget;