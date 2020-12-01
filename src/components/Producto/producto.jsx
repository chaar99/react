import { Component } from 'react';
import { Link } from "react-router-dom";

class Producto extends Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        const { addProductCart, elemento } = this.props;
        return (            
            <div className="col-12 col-sm-3 p-3">
                <p className="text-center">{elemento.id_productos}</p>
                <Link to="/detalle" elemento={elemento} className="btn btn-default"><img className="mx-auto d-block" style={{ height: 175, width:200 }} src={"./img/"+ elemento.ruta}/></Link>
                <p className="text-center">{elemento.nombre}</p>
                <p className="text-center small">{elemento.precio}€ / Unidad</p>
                <button className="btn btn-primary w-100" onClick={() => addProductCart(elemento.id_productos, elemento.nombre)}>Añadir al carrito</button>
            </div>  
        );
    }
};

export default Producto;