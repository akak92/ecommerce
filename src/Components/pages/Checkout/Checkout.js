import { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {collection, addDoc, updateDoc, doc } from "firebase/firestore";
import {Link} from "react-router-dom";
import "./Checkout.css";


const Checkout  = () => {
    const {cart, getTotalPrice, resetCart} = useContext(CartContext)
    const [userData, setUserData] = useState({
        nombre: "",
        userEmail: "",
        telefono: "",
    });

    const [orderId, setOrderId] = useState(null);

    const capturarDatos = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
    };

    const sendFormulario = (e) => {
        e.preventDefault();
        console.log("se envian a la api los siguientes datos:", userData);
        let total = getTotalPrice()
        let order = {
            buyer: userData,
            items: cart,
            total,   
        };

        let ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then( res => {
            setOrderId(res.id)
            resetCart()
        });

        let productsCollection = collection(db, "products");

        order.items.forEach( e => {
            let refDoc = doc(productsCollection, e.id);
            updateDoc(refDoc, {stock: e.stock - e.quantity});
        });
    };


    return (
        <div>
          <h2>Confirmar compra</h2>
          {
            orderId ? (
                <h2 className="confirmation-message">
                Gracias por su compra! Su ticket tiene el id: {orderId}
                    <Link to="/">
                    <button>Volver a inicio</button>
                    </Link>
              </h2>
            ) : (
                <form onSubmit={sendFormulario}>
                <input
                  type="text"
                  placeholder="Nombre"
                  name="nombre"
                  onChange={capturarDatos}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="userEmail"
                  onChange={capturarDatos}
                />
                <input
                  type="text"
                  placeholder="Teléfono"
                  name="telefono"
                  onChange={capturarDatos}
                />
                {/* Botones */}
                <div className="button-group">
                  <button type="submit">Enviar</button>
                  <Link to="/">
                  <button type="button">
                    Seguir comprando
                  </button>
                  </Link>
                </div>
              </form>
            )
          }
        </div>
      );
}

export default Checkout;