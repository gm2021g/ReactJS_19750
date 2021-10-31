import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import './CartVista.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { ItemDetail } from '../ItemDetailContainer/ItemDetail';

export const CartVista = () => {
    const { carrito, vaciarCarrito, removeItem, calcularTotal } = useContext(CartContext)

    return (
        <div className="container my-5">
            {
                carrito.length === 0
                    ?
                    <>
                        <h3>No hay productos en el Carrito</h3>
                        <Link to="/productos/todos" className="btn btn-success"> Ir a Productos </Link>
                    </>
                    :
                    <>
                        <h3> Carrito de Compras </h3>
                        <Card border="warning" style={{ width: '50rem' }}>
                            <Card.Body>
                                <Card.Text>

                                    {
                                        carrito.map((prod) => (
                                            <div>
                                                <Card.Header className="cardHeader">  {prod.nombre}  </Card.Header>
                                                <br />

                                                <Card.Img variant="top" className="cardImagen" src={prod.imagen} />
                                                <br />

                                                <p>Precio unitario: $ {prod.precio} </p>
                                                <p>Cantidad: {prod.cantidad}</p>

                                                <Card.Subtitle className="cardPrecio my-4" >Precio Total: $ {prod.precio * prod.cantidad}</Card.Subtitle>

                                                <Card.Link href="#" onClick={() => removeItem(prod.id)} className="cardEliminar" >
                                                    Eliminar Producto
                                                </Card.Link>
                                                <br /><br />
                                            </div>
                                        ))
                                    }

                                    <hr />
                                    <div>
                                        <h3 className="my-2"> Importe Total: $ {calcularTotal()} </h3>
                                        <button className="btn btn-danger my-2 mx-3" onClick={vaciarCarrito}>
                                            Vaciar Carrito
                                        </button>

                                        <button className="btn btn-warning my-2 mx-3" >
                                            Ir a Pagar
                                        </button>


                                        <Link className="btn btn-success my-2 mx-3" to="/productos/todos">
                                            Seguir comprando
                                        </Link>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                    </>
            }
        </div >
    )
}


