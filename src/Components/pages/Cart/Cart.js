import React, { useContext } from "react";
import {Link} from "react-router-dom"
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";

const Cart = () => {
    const { cart, resetCart, removeProduct, getTotalPrice } = useContext(CartContext);
    let totalAmount = getTotalPrice();

    return (
        <div className="cart-container">
            <h2 className="cart-header">Carrito de compras</h2>
            {cart.length === 0 ? (
                <h3 className="cart-header">El carrito está vacío</h3>
            ) : (
                <>
                    {cart.map(el => (
                        <div key={el.id} className="cart-item">
                            <img src={el.img} alt={el.title} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{el.title}</h3>
                                <h3>Cantidad: {el.quantity}</h3>
                                <h3>Precio unitario: ${el.price}</h3>
                            </div>
                            <button onClick={() => removeProduct(el.id)}>Eliminar</button>
                        </div>
                    ))}
                    <div className="cart-footer">
                        <button onClick={resetCart}>Vaciar carrito</button>
                        <Link to="/checkout">
                            <button>Finalizar Compra</button>
                        </Link>
                        <h3>Total Compra: ${totalAmount}</h3>
                    </div>
                </>
            )}
        </div>
    );
}
export default Cart;
