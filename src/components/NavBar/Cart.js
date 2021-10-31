import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const Cart = ({ text }) => {

    const { calcularCantidad } = useContext(CartContext)

    return (
        <div style={{
            display: calcularCantidad() === 0 ? "none" : "block"
        }}>
            <img src={text} alt="Carrito" />
            <span className="cantidad"> {calcularCantidad()} </span>
        </div>
    )
}

