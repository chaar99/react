import { Component } from 'react';

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

  volver(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    this.props.history.push({
      pathname:'/'
    });

  }
  user(ev) {
    if (localStorage.getItem("registrado") === "true"){
      // si es usuario administrador, ver boton
    }
  }
  render() {
    const { addProductCart, elemento } = this.props;
    const ident = elemento.id_productos;
    return (            
      <div className="row my-5 h-5">
        <div className="col-md-3"></div>
        <bottom onClick={(ev) => this.volver(ev)}>volver</bottom>
        <div className="col-12 col-md-2 ">
          <img style={{ height: 300, width:300 }} src={"./img/"+ elemento.ruta} alt={elemento.nombre}/>
        </div>
        <div className="col-12 col-md-3 ml-2">
          <div className="bg-blue">
            <h3 className="text-center">{elemento.nombre}</h3>
            <p className="text-center small">{elemento.precio}€ / Unidad</p>
            <p className="text-center small">{elemento.descripcion}</p>
          </div>
          <button className="btn btn-primary w-50 position-absolute p-25" style={{left: '0', bottom:'0'}}
            onClick={(ev) => {
              ev.stopPropagation();
              ev.preventDefault();
              addProductCart(elemento.id_productos, elemento.nombre);
            }}
          >Añadir al carrito</button>
          {/* Si el usuario se ha registrado y es administrador que eva el boton y otro para editar */}
          {/* <button className="btn btn-primary w-50 " style={{left: '0', bottom:'0'}}
            onClick={(ev, id) => this.borrar(ev,ident) }
          >Borrar</button>
           <button className="btn btn-primary w-50 " style={{left: '0', bottom:'0'}}
            onClick={() => this.volver()}
          >editar</button> */}
        </div>
        <div className="col-md-2"></div>
      </div>  
    );
  }
};

export default DetalleP;