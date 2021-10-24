import React, { useContext, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
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
            cantidad
        }

        if (cantidad > 0)
            addToCart(newItem);
    }

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
                ? <Link to="/carrito" className="btn btn-success" style={{ width: '20rem' }}> Terminar la compra </Link>
                :
                <>
                    <ItemCount cantidad={cantidad} modify={setCantidad} maximo={stock} />
                    <button style={{ width: '10rem', margin: "45%" }}
                        className="btn btn-success my-2"
                        onClick={handleAgregar}
                    >
                        Agregar
                    </button>
                </>
            }


            <div style={{ padding: '1rem' }} >
                <Button variant="warning"><b>Comprar</b></Button>
            </div>
            <div style={{ padding: '1rem' }} >
                <Button onClick={() => goBack()} variant="secondary" >  Volver </Button>
                {' '}
                <Button onClick={() => push("/")} variant="secondary" >  Ir al Home </Button>
            </div>
        </Card>
    )
}
