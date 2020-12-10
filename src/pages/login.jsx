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
      error: null, loading: false,
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
  
  navegarIndex() {
    this.props.onAddProducto();
    this.props.history.push({
      pathname: '/'
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
    fetch("http://localhost/aplicacion/proyectoDaw/inicioSesion_usuario.php", {
      method: 'POST',
      body: JSON.stringify(objeto),
    }
    ).then(res => {
      if (res.status === 200) {
        this.setState({
          loading: false,
          error: null
        });
        localStorage.setItem("registrado", true);
        //this.navegarIndex();
        return Promise.resolve(res);
      }
    })
    .then(res => res.json())
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
    const { error, loading, validCorreo,validPass } = this.state;
    return (
      <>
        {loading && <Load />}
        {!loading &&
          <>
            <div className="row mx-auto mt-5">
              <div className="border border-info rounded w-25 p-3 mx-auto col-10 col-sm-3">
                <h3 className="text-center">Inicia sesión</h3>
                <form className="d-flex flex-column">
                    <input className={`mr-2 mt-2 form-control ${validCorreo ? "border-success" : validCorreo === false? "border-danger": ""}`} type="text" placeholder="Email" id="correo" onBlur={(ev) => this.validarEmail(ev)} onChange={(ev) => this.onChangeInput(ev)} />
                      {validCorreo === false && <p className="text-danger">Lo sentimos. Formato incorrecto</p>}
                    <input className={`mr-2 mt-2 form-control ${validPass ? "border-success" : validPass === false? "border-danger": ""}`} type="password" placeholder="Password" id="password" onBlur={(ev) => this.validarPass(ev)} onChange={(ev) => this.onChangeInput(ev)} />
                      {validPass === false && <p className="text-danger">Lo sentimos. Formato incorrecto</p>}
                    <div>
                      <button className="btn btn-primary float-right mt-2" type="submit"  onClick={(ev) => this.onLogearse(ev)}>Inicia sesión</button>
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
          </>
        }
      </>
    );
  }
};

export default Login;