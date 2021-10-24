import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const CartVista = () => {
    const { carrito, vaciarCarrito, removeItem, calcularTotal } = useContext(CartContext)

    return (
        <div className="container my-5">
            {
                carrito.length === 0
                    ? <>

                        <h2>No hay productos en el Carrito</h2>
                        <Link to="/productos/todos" className="btn btn-success"> Ver Productos </Link>
                    </>
                    :
                    <>
                        <h2> Productos de mi Carrito </h2>
                        <hr />
                        {
                            carrito.map((prod) => (
                                <div>
                                    <h4>{prod.nombre}</h4>
                                    <p>Cantidad: {prod.cantidad}</p>
                                    <p>Precio unitario: {prod.precio} </p>
                                    <p>Precio Total: {prod.precio * prod.cantidad}</p>
                                    <button className="btn btn-danger" onClick={() => removeItem(prod.id)} >
                                        Eliminar Producto
                                    </button>
                                </div>
                            ))


                        }
                        <hr />
                        <h3 className="my-3"> Importe Total: $ {calcularTotal()} </h3>
                        <button className="btn btn-danger"
                            onClick={vaciarCarrito}> Vaciar Carrito</button>
                    </>

            }
        </div >
    )
}
