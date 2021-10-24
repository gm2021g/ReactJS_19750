import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    console.log(carrito)

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

    const isInCart = (ItemId) => {
        return carrito.some((prod) => prod.id === ItemId)
        //some retorna true si el objeto existe en el carrito
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const calcularTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    }

    return (
        <CartContext.Provider value={{
            carrito,
            addToCart,
            removeItem,
            calcularCantidad,
            vaciarCarrito,
            isInCart,
            calcularTotal
        }}   >
            {children}
        </CartContext.Provider>
    )

}