import { Button } from '../Buttons/Button';
import TituloNavBar from '../Títulos/TituloNavBar';
import Cart from './Cart';
import Logo from './Logo';
import './NavBar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function NavBar() {

    return (
        <>
            <section id="grillaMenu">
                <div id="areaUno">
                    <Logo logo='images/LogoOSTMA.jpg' />
                </div>

                <div class="areaDos">
                    <div><TituloNavBar /></div>
                    <Navbar>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto" >
                                <Nav.Link href="#Alimentos">Home</Nav.Link>
                                <Nav.Link href="#Accesorios">Planes</Nav.Link>
                                <NavDropdown title="Productos" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Medicamentos</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Higiene</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link href="#Medicamentos">Contacto</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <div class="areaTres">
                    <Cart text='images/cart.jpg' />
                </div>
            </section>
        </>
    );
}

