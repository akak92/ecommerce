import { useContext, useState } from "react";
import { useSnackbar } from "notistack";
import "./Counter.css";
import { CartContext } from "../../../context/CartContext";

const Counter = ({ product }) => {
    const [count, setCount] = useState(1);
    const { addToCart } = useContext(CartContext);
    const { enqueueSnackbar } = useSnackbar();

    const handleIncrement = () => {
        if (count < product.stock) {
            setCount(count + 1);
        } else {
            enqueueSnackbar("Ha alcanzado la máxima cantidad de unidades en stock.", { variant: "warning" });
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            enqueueSnackbar("Mínimo debe agregarse un elemento al carrito.", { variant: "error" });
        }
    };

    const onAdd = () => {
        let productToCart = { ...product, quantity: count };
        addToCart(productToCart);
        enqueueSnackbar("Producto agregado al carrito.", { variant: "success" });
    };

    return (
        <div className="counter-container">
            <div className="counter-controls">
                <button onClick={handleDecrement} className="counter-button">-</button>
                <h1>{count}</h1>
                <button onClick={handleIncrement} className="counter-button">+</button>
            </div>
            <button className="add-to-cart" onClick={onAdd}>Agregar al carrito</button>
        </div>
    );
};

export default Counter;
