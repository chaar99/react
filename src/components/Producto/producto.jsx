import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Card , Button} from "react-bootstrap";
class Producto extends Component {
    constructor(props) {
        super(props);
    }

    addProductCart(id, name){
        console.log(`Has añadido el producto ${name} con el id: ${id} al carrito.`);
    }
    render() {
        
        const { elemento } = this.props;
        return (
            
            <div className="col-12 col-sm-3 p-3">
                <p className="text-center">{elemento.id_productos}</p>
                <img  className="mx-auto d-block w-50 h-50" src={elemento.ruta} />
                <p className="text-center">{elemento.nombre}</p>
                <p className="text-center">{elemento.precio}€ / Unidad</p>
                {/* <Link className="btn btn-primary w-100" to="/detalle">comprar</Link> */}
                <button className="btn btn-primary w-100" onClick={() => this.addProductCart(elemento.id_productos, elemento.nombre)}>Añadir al carrito</button>
            </div>
            // Esto son componentes de rect bootstrap
            // <Card style={{ width: '18rem' }}>
            //     <Card.Img variant="top" src={elemento.ruta} />
            //     <Card.Body>
            //         <Card.Title>{elemento.nombre}</Card.Title>
            //         <Card.Text>{elemento.precio}€ / Unidad </Card.Text>
            //         <Button>Añadir al caarrito</Button>
            //     </Card.Body>
            // </Card>
        );
    }
};

export default Producto;