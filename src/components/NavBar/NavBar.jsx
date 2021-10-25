import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import TituloNavBar from '../Títulos/TituloNavBar';
import { Cart } from './Cart';
import Logo from './Logo';
import './NavBar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function NavBar() {
    return (
        <>
            <section id="grillaMenu">
                <div id="areaUno">
                    <Link exact to="/"> <Logo logo='../images/LogoOSTMA.jpg' />  </Link>
                </div>

                <div className="areaDos" style={{ textDecoration: 'none' }}>
                    <div><TituloNavBar /></div>
                    <Navbar>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav >
                                <Nav.Link> <NavLink style={{ textDecoration: 'none' }} className={"mr-auto my-2 my-lg-1"} activeClassName={'activeLink'} exact to="/"> Home </NavLink> </Nav.Link>
                                <Nav.Link> <NavLink style={{ textDecoration: 'none' }} activeClassName={'activeLink'} exact to="/planes"> Planes </NavLink> </Nav.Link>
                                <NavDropdown title="Productos" id="basic-nav-dropdown">
                                    <NavDropdown.Item> <NavLink style={{ textDecoration: 'none' }} activeClassName={'activeLink'} exact to="/productos/medicamentos"> Medicamentos </NavLink> </NavDropdown.Item>
                                    <NavDropdown.Item> <NavLink style={{ textDecoration: 'none' }} activeClassName={'activeLink'} exact to="/productos/higiene"> Higiene </NavLink> </NavDropdown.Item>
                                    <NavDropdown.Item> <NavLink style={{ textDecoration: 'none' }} activeClassName={'activeLink'} exact to="/productos/accesorios"> Accesorios </NavLink> </NavDropdown.Item>
                                    <NavDropdown.Item> <NavLink style={{ textDecoration: 'none' }} activeClassName={'activeLink'} exact to="/productos/todos"> Todos </NavLink> </NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link> <NavLink style={{ textDecoration: 'none' }} activeClassName={'activeLink'} exact to="/contacto"> Contacto </NavLink> </Nav.Link>


                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <div className="areaTres">
                    <Link style={{ textDecoration: 'none' }} exact to="/carrito"> <Cart text='../images/cart.jpg' /> </Link>
                </div>
            </section>

        </>
    );
}

