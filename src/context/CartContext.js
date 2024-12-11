import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart( [...cart, product] );
    };

    const resetCart = () => {
        setCart([]);
    };

    const removeProduct = ( id ) => {
        let filteredArray = cart.filter( (el) => el.id !== id)
        setCart(filteredArray);
    };

    const getTotalPrice = () => {
        let total = cart.reduce((total, el) => {
            return total + el.price * el.quantity
        }, 0);
        return total;
    };

    const getTotalElements = () => {
        let totalElements = cart.reduce((totalElements, el) => {
            return totalElements + el.quantity
        }, 0);
        return totalElements;
    }

    let data = { cart, addToCart, resetCart, removeProduct, getTotalPrice, getTotalElements }
    return <CartContext.Provider value = {data}>
        {children}
    </CartContext.Provider>
};