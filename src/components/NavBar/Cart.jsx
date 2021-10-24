import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const Cart = ({ text }) => {

    const { calcularCantidad } = useContext(CartContext)

    return (
        <div >
            <img src={text} alt="Carrito" />
            <span>  {calcularCantidad()}  </span>
        </div>
    )
}

