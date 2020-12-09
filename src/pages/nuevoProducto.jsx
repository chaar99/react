import { Component } from 'react';
import { compruebaText, stock, precio } from "../utils/validaciones";
import { withRouter } from 'react-router-dom';
import Load from '../components/Load/load';

class Nuevo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: null, validNombe: null, 
      stock: null, validSt: null, 
      descripcion: null, validDesc: null,
      precio: null, validP: null,
      ruta: null,
      categoria: null, validCa: null,
      error: null
    };
  }

  onChangeInput(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    this.setState({
      [ev.target.id]:ev.target.value
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
    const { nombre, stock, descripcion, precio, ruta, categoria } = this.state;
    const objeto = {
      nombre: nombre, stock: stock, descripcion: descripcion, precio: precio, ruta: ruta, categoria: categoria
    }
    fetch("http://localhost/aplicacion/proyectoDaw/nuevoPorducto.php",{
        method: 'POST', 
        body: JSON.stringify(objeto), 
      }
    ).then(res => {
      if (res.status === 200) {
        alert("registrado");
        this.setState({
          loading: false,
          error: null
        })
        this.navegarIndex();
        return Promise.resolve(res);
      }
    })
    .then(res => res.json())
    .catch((err) => {
      this.setState({
        error: "Este producto ya ha sido registrado",
        loading: false
      });
    });
  }

  render() {
    const { loading, error, validNombe, validDesc, validSt, validP, validCa, ruta } = this.state;
    return (
      <div className="row">
        <div className="col-12">
          {loading && <Load />}
          {!loading && 
            <div className="d-flex flex-column my-5">
              <div className="row">
                <div className="border border-info rounded w-25 p-3 mx-auto col-10 col-sm-3">
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
                    <select className=" mr-2 mt-2 custom-select" name="categoria" id="categoria" onChange={(ev) => this.onChangeInput(ev)}>
                      <option disabled="disabled" selected="selected">Selecciona uno</option>
                      <option value="Harry_Potter">Harry Potter</option>
                      <option value="Marvel">Marvel</option>
                      <option value="Star_wars">Star wars</option>
                      <option value="Dibujos">Dibujos</option>
                    </select>
                    <div className="custom-file mr-2 mt-2">
                      <input type="file" className="custom-file-input" id="ruta" lang="es" onChange={(ev) => this.onChangeInput(ev)}/>
                      <label className="custom-file-label" form="ruta">Seleccionar Archivo</label>
                      {ruta && <small>{ruta}</small>}
                    </div>
                    <div>
                      <input className="btn btn-primary float-right mt-2" type="submit" value="Dar de alta" onClick={(ev) => this.onAlta(ev)} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
};

export default withRouter(Nuevo);