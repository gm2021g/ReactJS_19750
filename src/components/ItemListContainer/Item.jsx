import React from 'react'
import { Card, Button } from 'react-bootstrap'

export const Item = ({ id, nombre, precio, imagen, descripcion, marca }) => {

    return (

        <Card style={{ width: '18rem' }} className="m-3" border="warning">
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title><b>{nombre}</b></Card.Title>
                <Card.Title>{marca}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{descripcion}</Card.Subtitle>
                <Card.Text><b>Precio: ${precio}</b></Card.Text>
            </Card.Body>

            <footer className="m-3">
                <Button variant="warning"><b>Comprar</b></Button>
            </footer>
        </Card>
    )
}