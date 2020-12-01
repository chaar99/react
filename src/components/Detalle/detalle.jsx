import { Component } from 'react';

class Detalle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { elemento } = this.props;
        return (
            <div>
                <img style={{ height: 175, width:200 }} src={"./img/"+ elemento.ruta} />
                <h2>{elemento.nombre}</h2>
                <p>{elemento.descripcion}</p>
                <p>{elemento.precio}€ / Unidad</p>
                {elemento.stock >= 5 && <p>{"Solo quedan "+ elemento.stock + " en stock."} </p> }
            </div>
        );
    }
};

export default Detalle;