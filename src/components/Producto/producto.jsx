import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Producto extends Component {
    constructor(props) {
        super(props);
       
    }

    navegarDetalle(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        const { elemento} = this.props;
        this.props.history.push({
            pathname:'/detalle',
            state: {
                elemento
            }
        });
    }
    render() {
        const { addProductCart, elemento } = this.props;
        return (            
            <div className="col-12 col-sm-3 p-3">
                <div onClick={(ev) => this.navegarDetalle(ev)}>
                    <p className="text-center">{elemento.id_productos}</p>
                    <img className="mx-auto d-block" style={{ height: 175, width:200 }} src={"./img/"+ elemento.ruta} alt={elemento.nombre}/>
                    <p className="text-center">{elemento.nombre}</p>
                    <p className="text-center small">{elemento.precio}€ / Unidad</p>
                </div>
                <button className="btn btn-primary w-100" style={{bottom: '0'}}
                    onClick={(ev) => {
                        ev.stopPropagation();
                        ev.preventDefault();
                        addProductCart(elemento.id_productos, elemento.nombre);
                    }}
                >Añadir al carrito</button>
            </div>  
        );
    }
};

export default withRouter(Producto);