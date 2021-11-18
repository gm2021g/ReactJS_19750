import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const addToCart = (item) => {
        setCarrito([...carrito, item]);
    }

    const removeItem = (itemId) => {
        const newCart = carrito.filter((prod) => prod.id !== itemId)
        setCarrito(newCart)
    }

    // cantidad de la suma de todos las cantidades de cada productos del carrito
    const calcularCantidad = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const isInCart = (itemId) => {
        return carrito.some((prod) => prod.id === itemId)
        //some retorna true si el objeto existe en el carrito
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const calcularTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    }

    const cambiarCantidad = (itemId, cant) => {
        const index = carrito.findIndex((prod) => prod.id === itemId)
        const appendItem = [...carrito];
        if (cant > 0 && cant <= appendItem[index].stock) {
            appendItem[index].cantidad = cant;
            setCarrito(appendItem);
        }
    };

    return (
        <CartContext.Provider value={{
            carrito,
            addToCart,
            removeItem,
            calcularCantidad,
            vaciarCarrito,
            isInCart,
            calcularTotal,
            cambiarCantidad
        }}   >
            {children}
        </CartContext.Provider>
    )

}