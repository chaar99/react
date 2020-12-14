import { Component } from 'react';
import { Link } from "react-router-dom";
import { email, longitudPass } from '../utils/validaciones';
import Load from '../components/Load/load';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: null, validPass: null,
      correo: null, validCorreo: null,
      error: null, loading: false, logeado: false
    };
  }

  comprobarDisabled() {
    const { validPass, validCorreo } = this.state;
    return !(validPass && validCorreo);
  }

  onChangeInput(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    this.setState({
      [ev.target.id]:ev.target.value
    });
  }
  
  onLogearse(ev) {
    this.setState({
      loading: true
    });
    ev.stopPropagation();
    ev.preventDefault();
    const { password, correo } = this.state;
    const objeto = {
      password : password,
      correo : correo
    }
    fetch("https://95c2aa06c797.ngrok.io/aplicacion/proyectoDaw/pages/inicioSesion_usuario.php", {
      method: 'POST',
      body: JSON.stringify(objeto),
    })
    .then(res => {
      if (res.status === 200) {
        this.setState({
          loading: false,
          error: null,
          logeado: true
        });
      }
      return res.json();
    })
    .then(res => {
        localStorage.setItem("registrado", JSON.stringify(res));
        localStorage.setItem("productos", null);
    })
    .catch((err) => {
      this.setState({
        error: "Correo o contraseña equivocados.",
        loading: false,
        validPass: null,
        validCorreo: null
      });
      localStorage.setItem("registrado", false);
    });
  }

  validarEmail(ev) {
    this.setState({
      validCorreo: email(ev, ev.target.value)
    });
  }

  validarPass(ev) {
    this.setState({
      validPass: longitudPass(ev, ev.target.value)
    })
  }

  render() {
    const { error, logeado, loading, validCorreo,validPass } = this.state;
    if(logeado) {
      return (
        <div className="container2">
          <div className="row mx-auto">
            <div className="col-12">
              <h3 className="text-center">Registrado correctamente</h3>
              <button className="btn btn-dark"><Link className="ml-2 text-white" to="/">Ir a inicio</Link></button>
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
                <h3 className="text-center">Inicia sesión</h3>
                <form>
                    <input className={`mr-2 mt-2 form-control ${validCorreo ? "border-success" : validCorreo === false? "border-danger": ""}`} type="text" placeholder="Email" id="correo" onBlur={(ev) => this.validarEmail(ev)} onChange={(ev) => this.onChangeInput(ev)} />
                      {validCorreo === false && <p className="text-danger">Lo sentimos. Formato incorrecto</p>}
                    <input className={`mr-2 mt-2 form-control ${validPass ? "border-success" : validPass === false? "border-danger": ""}`} type="password" placeholder="Password" id="password" onBlur={(ev) => this.validarPass(ev)} onChange={(ev) => this.onChangeInput(ev)} />
                      {validPass === false && <p className="text-danger">Lo sentimos. Formato incorrecto</p>}
                    <div>
                      <button className="btn btn-dark float-right mt-2" type="submit"  disabled={this.comprobarDisabled()} onClick={(ev) => this.onLogearse(ev)}>Inicia sesión</button>
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                </form>
              </div>
            </div>
            <div className="text-center mt-3">
              <p>¿No tienes una cuenta?
                <Link className="ml-2" to="/registro">Registrate</Link>
              </p>    
            </div>
          </div>
        }
      </>
    );
  }
};

export default Login;