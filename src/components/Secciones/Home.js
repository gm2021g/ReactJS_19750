import React from 'react'
import { Link } from 'react-router-dom'
import './Secciones.css';
import Card from 'react-bootstrap/Card'

export const Home = () => {
    return (
        <>

            <Card>
                <Card.Header className="tituloPrincipal" >Bienvenidos a OSTMA</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <div>
                            <p> Nuestra obra social de excelencia para mascotas posee atención médica de primer nivel las 24 hs, en Capital Federal.</p>
                            <p> Consideramos a una mascota como un integrante más de la familia que se merece la mejor atención. </p>
                            <p> La medicina preventiva es la mejor manera de cuidarlos. </p>
                            <p> Con nuestros planes tu mascota tendrá el cuidado que se merece. </p>
                            <p> Porque sabemos lo costoso que es atenderla, te ofrecemos los planes más completos a precios muy accesibles.</p>
                            <p> Planes para todo tipos de mascotas: perros, gatos, reptiles, aves y peces.</p>
                            <p> La mejor atención veterinaria y médicos especialistas de primer nivel.</p>
                            <p> OSTMA es tu tranquilidad y lo mejor para tu mascota.</p>
                        </div>
                    </blockquote>
                </Card.Body>
            </Card>

            <Card>
                <Card.Header className="tituloPrincipal" >Beneficios</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <div>
                            <ul>
                                <li> Las mejores veterinarias asociadas  </li>
                                <li> Veterinarias con guardias las 24 hs </li>
                                <li> Asesoramiento telefónico las 24 hs </li>
                                <li> Veterinarios especialistas </li>
                                <li > Descuentos en Pet Shop's  </li>
                                <li > Descuentos en peluquería y baño </li>
                                <li > Sorteos mensuales entre nuestros socios </li>
                                <li > Regalo sorpresa para los socios nuevos </li>
                                <li > Regalo de cumpleaños para tu mascota </li>
                                <li > Descuentos en adiestramiento canino </li>
                                <li > Importantes descuentos si asocias más de una mascota </li>
                                <li > 15% OFF sobre el valor de la cuota si tu mascota es perro o gato mestizo </li>
                                <br />
                                <li >
                                    <b> Importantes descuentos a Socios comprando en nuestra tienda: </b>
                                    <Link to="/productos/todos" className="homeLink" > Ver Productos </Link>
                                </li>
                            </ul>
                        </div>
                    </blockquote>
                </Card.Body>
            </Card>
            <br />
        </>
    )
}
