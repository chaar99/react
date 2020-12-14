import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {ReactComponent as Close} from "../../assets/close.svg";

class DetalleP extends Component {
  constructor(props) {
    super(props);
  }

  navegarIndex() {
    this.props.onAddProducto();
    this.props.history.push({
      pathname: '/'
    });
  }
  
  borrar(ev, id) {
    ev.stopPropagation();
    ev.preventDefault();
    const objeto = {
      id: id
    }
    fetch("https://95c2aa06c797.ngrok.io/aplicacion/proyectoDaw/pages/borrarProducto.php",{
      method: 'POST',
      body: JSON.stringify(objeto),
    }
    ).then(res => {
      if (res.status === 200) {
        this.navegarIndex();
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
        <div className="col-12 col-lg-2 pt-4">
          <Close onClick={(ev) => history.goBack()} className="m-close float-right pointer" />
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
            {localStorage.getItem("registrado") === null ? "": JSON.parse(localStorage.getItem('registrado')).idR === "1"? <button className="btn btn-danger ml-2" onClick={(ev, id) => this.borrar(ev, elemento.id_productos)}> Eliminar Producto</button>: ""}
          </div>
        </div>
      </div>
     );
  }
};

export default withRouter(DetalleP);