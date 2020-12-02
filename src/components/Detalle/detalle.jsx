import { Component } from 'react';

class DetalleP extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { addProductCart, elemento } = this.props;
        return (            
            <div className="row my-5 h-5">
                <div className="col-md-3"></div>
                <div className="col-12 col-md-2 ">
                    <img style={{ height: 300, width:300 }} src={"./img/"+ elemento.ruta}/>
                </div>
                <div className="col-12 col-md-3 ml-2">
                    <h3 className="text-center">{elemento.nombre}</h3>
                    
                        <p className="text-center small">{elemento.precio}€ / Unidad</p>
                        <p className="text-center small">{elemento.descripcion}</p>
                        <button className="btn btn-primary w-100 position-absolute p-25" style={{left: '0', bottom:'0'}}
                            onClick={(ev) => {
                                ev.stopPropagation();
                                ev.preventDefault();
                                addProductCart(elemento.id_productos, elemento.nombre);
                            }}
                        >Añadir al carrito</button>
                    
                </div>
                <div className="col-md-3"></div>
            </div>  
        );
    }
};

export default DetalleP;