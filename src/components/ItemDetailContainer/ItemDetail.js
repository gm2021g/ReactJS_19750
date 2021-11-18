import React, { useContext, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

export const ItemDetail = ({ id, nombre, precio, imagen, descripcion, marca, tipo, stock }) => {

    const { goBack, push } = useHistory()

    const { addToCart, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () => {
        //lo que se guarda en el carrito
        const newItem = {
            id, nombre, precio, imagen, descripcion, marca, tipo,
            cantidad, stock
        }

        if (cantidad > 0)
            addToCart(newItem);
    }

    // if (nombre === undefined) {
    //     return (
    //         <>
    //             <h1> No se encontraron datos </h1>
    //             <div style={{ padding: '1rem' }} >
    //                 <button onClick={() => goBack()} variant="secondary" >  Volver </button>
    //                 {' '}
    //                 <button onClick={() => push("/")} variant="secondary" >  Ir al Home </button>
    //             </div>
    //         </>
    //     );
    // }

    return (

        <Card className="text-center">
            <Card.Img variant="top" src={imagen} className="mx-auto d-block" style={{ width: '15rem' }} />
            <Card.Body>
                <Card.Title><b>{nombre}</b></Card.Title>
                <Card.Title>{marca}</Card.Title>
                <Card.Title>Tipo de Producto:  {tipo}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{descripcion}</Card.Subtitle>
                <Card.Text><b>Precio: ${precio}</b></Card.Text>
            </Card.Body>

            {isInCart(id)
                ?
                <>
                    <div style={{ padding: '1rem' }} >
                        <p style={{ fontSize: '1.5rem', color: 'orange' }}> <b> ¡ Producto agregado al carrito ! </b> </p>
                        <Link to="/carrito" className="btn btn-warning"> Terminar la compra </Link>
                    </div>
                </>
                :
                <>
                    <ItemCount cantidad={cantidad} modify={setCantidad} maximo={stock} />
                    <button style={{ width: '10rem', margin: "46%" }}
                        className="btn btn-success my-2"
                        onClick={handleAgregar}
                    >
                        Agregar al Carrito
                    </button>
                </>
            }

            <div style={{ padding: '1rem' }} >
                <button onClick={() => goBack()} variant="secondary" >  Volver </button>
                {' '}
                <button onClick={() => push("/")} variant="secondary" >  Ir al Home </button>
            </div>
        </Card>
    )
}
