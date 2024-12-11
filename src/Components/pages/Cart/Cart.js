import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Cart  = () => {
    const { cart } = useContext(CartContext)
    return <div>
       <h2>Pagina Cart</h2>
       {
        cart.map( el => {
            return <div 
                    key={el.id}
                    style={{ border: "2px solid black", padding: "20px"}}>
                <h3>{el.title}</h3>
                <h3>cantidad: {el.quantity}</h3>
                <h3>precio unitario: {el.price}</h3>
                <buton>Eliminar</buton>
            </div>
            }
        )
       }
       <button>Limpiar carrito</button>
    </div>
}

export default Cart;