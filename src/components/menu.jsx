import { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";

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
            </Navbar>
        );
    }
};

function BrandNav() {
    return (
        <Navbar.Brand className="d-flex align-items-center justify-content-center">
            logo
        </Navbar.Brand>
    );
}

function MenuNav() {
    return(
        <Nav className="mr-auto">
            <Nav.Link href="login">Inicia sesion</Nav.Link>
        </Nav>
    )
}
export default Menu;