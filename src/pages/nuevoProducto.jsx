import { Component } from 'react';
import { compruebaText, stock, precio } from "../utils/validaciones";
import { withRouter } from 'react-router-dom';
import Load from '../components/Load/load';
import { Link } from "react-router-dom";

class Nuevo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: null, validNombe: null, 
      stock: null, validSt: null, 
      descripcion: null, validDesc: null,
      precio: null, validP: null,
      ruta: null, validR: null,
      error: null, loading: false, logeado: false
    };
  }

  comprobarDisabled() {
    const { validNombe, validSt, validDesc, validP, validR } = this.state;
    return !(validNombe && validSt && validDesc && validP && validR);
  }

  onChangeInput(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    this.setState({
      [ev.target.id]:ev.target.value
    });
  }
  onChangeFile(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    this.setState({
      [ev.target.id]:ev.target.value,
      validR: true
    });
  }
  validarTexto(ev, valorState) {
    this.setState({
      [valorState]: compruebaText(ev, ev.target.value)
    })
  }

  validarStock(ev) {
    this.setState({
      validSt: stock(ev, ev.target.value)
    })
  }

  validarPrecio(ev) {
    this.setState({
      validP: precio(ev, ev.target.value)
    })
  }

  navegarIndex() {
    this.props.onAddProducto();
    this.props.history.push({
      pathname: '/'
    });
  }
  
  onAlta(ev) {
    this.setState({
      loading: true
    });
    ev.stopPropagation();
    ev.preventDefault();
    const { nombre, stock, descripcion, precio, ruta } = this.state;
    const objeto = {
      nombre: nombre, stock: stock, descripcion: descripcion, precio: precio, ruta: ruta
    }
    fetch("http://localhost/aplicacion/proyectoDaw/pages/nuevoProducto.php",{
        method: 'POST', 
        body: JSON.stringify(objeto), 
      }
      ).then(res => {
        if (res.status === 200) {
          this.setState({
            loading: false,
            error: null
          });
        }
        this.navegarIndex();
      })
      .catch((err) => {
        this.setState({
          error: "Este correo ya corresponde con un usuario",
          loading: false
        });
      });
    }

  render() {
    const { loading, error, validNombe, validDesc, validSt, validP, ruta } = this.state;
    return (
      <div className="container2">
        {loading && <Load />}
        {!loading && 
            <div className="row mx-auto my-5">
              <div className="border border-info rounded w-25 p-3 mx-auto col-12 col-sm-3">
                <h3 className="text-center">Da de alta un nuevo producto</h3>
                <form>
                {error && <p className="text-danger">{error}</p>}
                  <input className={`mr-2 mt-2 form-control ${validNombe ? "border-success" : validNombe === false? "border-danger": ""}`} type="text" placeholder="Nombre" onBlur={(ev) => this.validarTexto(ev, "validNombe")} onChange={(ev) => this.onChangeInput(ev)} id="nombre" />
                    {validNombe === false && <p className="text-danger">Lo sentimos. Formato incorrecto</p>}
                  <input className={`mr-2 mt-2 form-control ${validDesc ? "border-success" : validDesc === false? "border-danger": ""}`} type="text" placeholder="Descripción" onBlur={(ev) => this.validarTexto(ev, "validDesc")} onChange={(ev) => this.onChangeInput(ev)} id="descripcion" />
                    {validDesc === false && <p className="text-danger">Lo sentimos. Formato incorrecto</p>}
                  <input className={`mr-2 mt-2 form-control ${validSt ? "border-success" : validSt === false? "border-danger": ""}`} type="number" placeholder="Stock" onBlur={(ev) => this.validarStock(ev)} onChange={(ev) => this.onChangeInput(ev)} id="stock" />
                    {validSt === false && <p className="text-danger">Lo sentimos. Formato incorrecto</p>}
                  <input className={`mr-2 mt-2 form-control ${validP ? "border-success" : validP === false? "border-danger": ""}`} type="number" placeholder="Precio" onBlur={(ev) => this.validarPrecio(ev)} onChange={(ev) => this.onChangeInput(ev)} id="precio" />
                    {validP === false && <p className="text-danger">Lo sentimos. Formato incorrecto</p>}
                  <div className="custom-file mr-2 mt-2">
                    <input type="file" className="custom-file-input" id="ruta" lang="es" onChange={(ev) => this.onChangeFile(ev)}/>
                    <label className="custom-file-label" form="ruta">Seleccionar Archivo</label>
                    {ruta && <small>{ruta}</small>}
                  </div>
                  <div>
                    <button className="btn btn-dark float-right mt-2" type="submit"  disabled={this.comprobarDisabled()} onClick={(ev) => this.onAlta(ev)}>Dar de alta</button>
                  </div>
                </form>
              </div>
            </div>
        }
      </div>
    );
  }
};

export default withRouter(Nuevo);