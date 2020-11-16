import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Producto extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { elemento } = this.props;
        return (
            // <div className= {`producto-${elemento.nombre}`}>
            // <div className="border border-info rounded w-50 h-50 float-left">
            //     <img  className="mx-auto d-block" src={elemento.ruta} width={150} height={150}/>
            //     <p>Nombre: {elemento.nombre}</p>
            //     <p>{elemento.precio}€</p>
            //     <p>Descripcion: {elemento.descripcion}</p>
            // </div>
            <div className="col-12 col-sm-3 p-3">
                <img  className="mx-auto d-block w-50 h-50" src={elemento.ruta} />
                <p className="text-center">{elemento.nombre}</p>
                <p className="text-center">{elemento.precio}€</p>
                <Link className="btn btn-primary w-100" to="/detalle">comprar</Link>
            </div>
           
        );
    }
};

export default Producto;