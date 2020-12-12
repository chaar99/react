import { Component } from 'react';
import { Navbar, Nav,Form } from "react-bootstrap";
import Cart from '../cart/cart';
import Perfil from '../Perfil/perfil';
import Logo from "../Logo/logo";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { productos, productsCar, onEmptyCart, getProductsCar } = this.props;
    return (
      <div className="header2">
        <Navbar bg="dark" variant="dark" expand="lg">
          <BrandNav />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <MenuNav />
            <Perfil /> 
          </Navbar.Collapse>
          <Form inline>
            <Cart productos={productos} productsCar={productsCar} onEmptyCart={onEmptyCart} getProductsCar={getProductsCar} />  
          </Form>
        </Navbar>
      </div>
    );
  }
};

function BrandNav() {
  return (
    <Navbar.Brand>
      <Nav.Link href="/"><Logo /></Nav.Link>
    </Navbar.Brand>
  );
}

function MenuNav() {
  return (
    <Nav className="mr-auto ">
      <Nav.Link href="/">Inicio</Nav.Link>
      <Nav.Link href="login">Inicia sesion</Nav.Link>
      {localStorage.getItem('registrado') === null?<Nav.Link href="registro">Registrate</Nav.Link>: ""}
      {localStorage.getItem('registrado') === null || localStorage.getItem('registrado') == "false" ? "" : JSON.parse(localStorage.getItem('registrado')).idR === "1" ?<Nav.Link href="nuevoProducto">Nuevo producto</Nav.Link>: ""}
    </Nav>
  )
}

export default Menu;