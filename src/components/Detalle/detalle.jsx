import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class DetalleP extends Component {
  constructor(props) {
    super(props);
  }

  borrar(ev, id) {
    ev.stopPropagation();
    ev.preventDefault();
    const objeto = {
      id: id
    }
    fetch("http://localhost/aplicacion/proyectoDaw/borrarProducto.php",{
      method: 'POST',
      body: JSON.stringify(objeto),
    }
    ).then(res => {
      if (res.status === 200) {
        alert("borrado");
      }
    });
  }

  editar(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    this.props.history.push({
      pathname:'/editar'
    });
  }

  render() {
    const { addProductCart, elemento, history } = this.props;
    return (       
      <div className="row mt-4 m-auto">
        <div className="col-12 col-lg-2">
          <button type="button" onClick={(ev) => history.goBack()} className="btn btn-link">Volver</button>
        </div>
        <div className="col-12 col-lg-5">
          <img className="img-fluid" src={"./img/"+ elemento.ruta} alt={elemento.nombre}/>
        </div>
        <div className="col-12 col-lg-5 m-auto">
          <h3 className="">{elemento.nombre}</h3>
          <p className=" small">{elemento.precio}€ / Unidad</p>
          <p className="">{elemento.descripcion}</p>
          <div className="mb-2">
            <button className="btn btn-dark"
              onClick={(ev) => {
                ev.stopPropagation();
                ev.preventDefault();
                addProductCart(elemento.id_productos, elemento.nombre);
              }}
            >Añadir al carrito</button>
          </div>
        </div>
      </div>
     );
  }
};

export default withRouter(DetalleP);