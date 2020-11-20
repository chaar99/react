import { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import Cart from '../cart/cart';
import Logo from "../Logo/logo";

import './menu.css';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Navbar  bg="dark" variant="dark"  className="top-menu">
                <BrandNav />
                <MenuNav />
                <Cart />
            </Navbar>
        );
    }
};

function BrandNav() {
    return (
        <Navbar.Brand>
           <Logo />
           
        </Navbar.Brand>
    );
}

function MenuNav() {
    return(
        <Nav className="mr-auto">
            <Nav.Link href="login">Inicia sesion</Nav.Link>
            <Nav.Link href="prueba">Registrate</Nav.Link>
            <Nav.Link href="nuevoProducto">Nuevo producto</Nav.Link>
            <Nav.Link href="/">Inicio</Nav.Link>
        </Nav>
    )
}
export default Menu;