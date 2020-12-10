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
      <div className="row mt-4">
        <div className="col-12 col-sm-2">
          <button type="button" onClick={(ev) => history.goBack()} className="btn btn-link">Volver</button>
        </div>
        <div className="col-12 col-sm-5">
          <img className="img-fluid" src={"./img/"+ elemento.ruta} alt={elemento.nombre}/>
        </div>
        <div className="col-12 col-sm-5">
          <div className="row">
            <div className="col-12 mt-5">
              <h3 className="">{elemento.nombre}</h3>
              <p className=" small">{elemento.precio}€ / Unidad</p>
              <p className=" small">{elemento.descripcion}</p>
              <div className="position-absolute">
                <button className="btn btn-primary"
                  onClick={(ev) => {
                    ev.stopPropagation();
                    ev.preventDefault();
                    addProductCart(elemento.id_productos, elemento.nombre);
                  }}
                >Añadir al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
  }
};

export default withRouter(DetalleP);