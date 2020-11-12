import { Component } from 'react';

class Producto extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { elemento } = this.props;
        return (
            <div className= {`producto-${elemento.nombre}`}>
                <p className="text-success">Nombre: {elemento.nombre}</p>
                <p>Descripcion: {elemento.descripcion}</p>
            </div>
           
        );
    }
};

export default Producto;