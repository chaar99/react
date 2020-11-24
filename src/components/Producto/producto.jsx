import { Component } from 'react';

class Producto extends Component {
    constructor(props) {
        super(props);
       
    }
    render() {
        const { addProductCart, elemento } = this.props;
        return (            
            <div className="col-12 col-sm-3 p-3">
                <p className="text-center">{elemento.id_productos}</p>
                <img className="mx-auto d-block w-75 h-50" src={"./img/"+ elemento.ruta} />
                <p className="text-center">{elemento.nombre}</p>
                <p className="text-center small">{elemento.precio}€ / Unidad</p>
                <button className="btn btn-primary w-100" onClick={() => addProductCart(elemento.id_productos, elemento.nombre)}>Añadir al carrito</button>
            </div>  
        );
    }
};

export default Producto;