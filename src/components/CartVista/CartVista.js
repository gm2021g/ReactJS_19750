import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import './CartVista.css';

export const CartVista = () => {
    const { carrito, vaciarCarrito, removeItem, calcularTotal, cambiarCantidad } = useContext(CartContext)

    return (
        <div className="container my-5">
            {
                carrito.length === 0
                    ?
                    <>
                        <p className="tituloPrincipal">No hay productos en el Carrito</p>
                        <Link to="/productos/todos" className="btn btn-success"> Ir a Productos </Link>
                    </>
                    :
                    <>
                        <p className="tituloPrincipal">Carrito de Compras</p>
                        <Card border="warning" style={{ width: '50rem' }}>
                            <Card.Body>
                                <Card.Text>

                                    {
                                        carrito.map((prod) => (
                                            <div key={prod.id}>
                                                <Card.Header className="cardHeader">  {prod.nombre}  </Card.Header>
                                                <br />

                                                <Card.Img variant="top" className="cardImagen" src={prod.imagen} />
                                                <br />

                                                <p>Precio unitario: $ {prod.precio} </p>

                                                <div className="my-4">
                                                    <label className="control-label col-sm-2"> Cantidad </label>
                                                    <input
                                                        className="form-control"
                                                        type="number"
                                                        placeholder="cantidad"
                                                        name="cantidad"
                                                        value={prod.cantidad}
                                                        onChange={(e) => cambiarCantidad(prod.id, Number(e.target.value))}
                                                    />
                                                </div>

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

                                        <Link className="btn btn-success" to="/checkout" >
                                            Ir a Pagar
                                        </Link>

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


