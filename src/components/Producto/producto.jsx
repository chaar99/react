import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Producto extends Component {
  constructor(props) {
    super(props);
  }

  navegarDetalle(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    const { elemento } = this.props;
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
      <div className="col-12 col-md-4 col-lg-3 p-3">
        <div className="bg-white shadow-lg  bg-white rounded pointer">
          <div onClick={(ev) => this.navegarDetalle(ev)}>
            <img className="mx-auto d-block" style={{ height: 175, width:200, maxWidth:"100%" }} src={"./img/"+ elemento.ruta} alt={elemento.nombre}/>
            <h3 className="text-center">{elemento.nombre}</h3>
            <p className="text-center small">{elemento.precio}€ / Unidad</p>
          </div>
          <button className="btn btn-dark w-100" style={{bottom: '0'}}
            onClick={(ev) => {
              ev.stopPropagation();
              ev.preventDefault();
              addProductCart(elemento.id_productos, elemento.nombre);
            }}
          >Añadir al carrito</button>
        </div>
      </div>  
    );
  }
};

export default withRouter(Producto);