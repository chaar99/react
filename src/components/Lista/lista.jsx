import { Component } from 'react';

class Lista extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const imag = this.props.producto.map((productoos) =><div className="Productos">
        <p>Imagen: {productoos.ruta}, Nombre: {productoos.nombre}, descripcion: {productoos.descripcion}</p></div>)
        return (
            
            <div>
                elementos hechos con el componente lista: {imag}
            </div>
           
        );
    }
};

export default Lista;