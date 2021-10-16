import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

export const ItemDetail = ({ id, nombre, precio, imagen, descripcion, marca, tipo }) => {

    const { goBack, push } = useHistory()

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
