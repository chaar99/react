import { Component } from 'react';
import { Link } from "react-router-dom";
import Load from '../components/Load/load';
import { email, compruebaText, compruebaDNI, longitudPass } from "../utils/validaciones";

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: null, validNombe: null,
      password: null, validPass: null,
      correo: null, validCorreo: null,
      apell: null, validApell: null,
      dni: null, validDNI: null,
      loading: false, error: null, logeado: false
    };
  }

  comprobarDisabled() {
    const { validNombe, validPass, validCorreo, validApell, validDNI } = this.state;
    return !(validNombe && validPass && validCorreo && validApell && validDNI);
  }

  onChangeInput(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    this.setState({
      [ev.target.id]:ev.target.value,
    });
  }

  validarEmail(ev) {
    var valor = ev.target.value;
    this.setState({
      validCorreo: email(ev, valor),
    });
  }

  validarTexto(ev, valorState) {
    var valor = ev.target.value;
    this.setState({
      [valorState]: compruebaText(ev, valor)
    })
  }

  validarDNI(ev) {
    var valor = ev.target.value;
    this.setState({
      validDNI: compruebaDNI(ev, valor)
    })
  }

  validarPass(ev) {
    var valor = ev.target.value;
    this.setState({
      validPass: longitudPass(ev, valor)
    })
  }

  onLogearse(ev) {
    this.setState({
      loading: true
    });
    ev.stopPropagation();
    ev.preventDefault();
    const { nombre, password, correo, apell, dni } = this.state;
    const objeto = {
      nombre: nombre, password: password, correo: correo, apell: apell, dni: dni
    }
    fetch("http://localhost/aplicacion/proyectoDaw/registro_usuario.php",{
      method: 'POST',
      body: JSON.stringify(objeto),
    }
    ).then(res => {
      if (res.status === 200) {
        this.setState({
          loading: false,
          error: null,
          logeado: true,
        });
      }
      return res.json();
    })
    .then(res => {
      localStorage.setItem("registrado", JSON.stringify(res));
    })
    .catch((err) => {
      this.setState({
        error: "Este correo ya corresponde con un usuario",
        loading: false
      });
      localStorage.setItem("registrado", false);
    });
  }

  render() {
    const { loading, error, validCorreo, validNombe, validApell, validDNI, validPass, logeado } = this.state;
    if(logeado) {
      return (
        <div className="section">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center">Registrado correctamente</h3>
              <button><Link className="ml-2" to="/">Ir a inicio</Link></button>
            </div>
          </div>
        </div>
      )
    }
    return (
      <>
        {loading && <Load />}
        {!loading && 
          <div className="container2">
            <div className="row mx-auto mt-5">
              <div className="border border-info rounded w-25 p-3 mx-auto col-10 col-sm-3">
                <h3 className="text-center">Registrate</h3>
                <form>
                {error && <p className="text-danger">{error}</p>}
                  <input className={`mr-2 mt-2 form-control ${validCorreo ? "border-success" : validCorreo === false? "border-danger": ""}`} type="text" required="required" id="correo" placeholder="Email" onBlur={(ev) => this.validarEmail(ev)} onChange={(ev) => this.onChangeInput(ev)} />
                    {validCorreo === false && <p className="text-danger">Lo sentimos. Formato incorrecto</p>}
                  <input className={`mr-2 mt-2 form-control ${validNombe ? "border-success" : validNombe === false? "border-danger": ""}`} type="text" placeholder="Name" id="nombre" onBlur={(ev) => this.validarTexto(ev, "validNombe")} onChange={(ev) => this.onChangeInput(ev)} />
                    {validNombe === false && <p className="text-danger">Lo sentimos. Formato incorrecto</p>}
                  <input className={`mr-2 mt-2 form-control ${validApell ? "border-success" : validApell === false? "border-danger": ""}`} type="text" placeholder="Surname" id="apell" onBlur={(ev) => this.validarTexto(ev, "validApell")} onChange={(ev) => this.onChangeInput(ev)} />
                    {validApell === false && <p className="text-danger">Lo sentimos. Formato incorrecto</p>}
                  <input className={`mr-2 mt-2 form-control ${validPass ? "border-success" : validPass === false? "border-danger": ""}`} type="password" placeholder="Password" id="password" onBlur={(ev) => this.validarPass(ev)} onChange={(ev) => this.onChangeInput(ev)} />
                    {validPass === false && <p className="text-danger">Lo sentimos. Formato incorrecto</p>}
                  <input className={`mr-2 mt-2 form-control ${validDNI ? "border-success" : validDNI === false? "border-danger": ""}`} type="text" placeholder="DNI" id="dni" onBlur={(ev) => this.validarDNI(ev)} onChange={(ev) => this.onChangeInput(ev)} />
                    {validDNI === false && <p className="text-danger">Lo sentimos. Formato incorrecto.</p>}
                  <button disabled={this.comprobarDisabled()} className="btn btn-dark float-right mt-2" type="submit" onClick={(ev) => this.onLogearse(ev)}>Registrarse</button>
                </form>
              </div>
            </div>
            <div className="text-center mt-3">
              <p>¿Ya tienes una cuenta?
                <Link className="ml-2" to="/login">Inicia sesión</Link>
              </p>    
            </div>
          </div>
        }
      </>
    );
  }
};

export default Registro;