import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Item = ({ id, nombre, precio, imagen, marca }) => {

    return (

        <Card style={{ width: '18rem' }} className="m-3" border="warning">
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title><b>{nombre}</b></Card.Title>
                <Card.Title>{marca}</Card.Title>
                <Card.Text><b>Precio: ${precio}</b></Card.Text>
            </Card.Body>

            <footer className="m-3">
                <Link to={`/detalle/${id}`}>
                    <Button variant="warning"><b>Comprar</b></Button>
                </Link>
            </footer>
        </Card>
    )
}