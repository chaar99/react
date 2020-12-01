import { Component } from 'react';
import { Link } from "react-router-dom";
import { email, longitudPass } from '../utils/validaciones';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: null,
            correo: null,
            persona: {},
            validCorreo: null,
            validPass: null
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
        const {password, correo} = this.state;
        const objeto = {
            password : password,
            correo : correo
        }
        fetch("http://localhost/aplicacion/proyectoDaw/inicioSesion_usuario.php",
            {
                method: 'POST',
                body: JSON.stringify(objeto),
            }
        ).then(res => res.json())
        .then(res => {
            debugger;
            this.setState({
                persona: res,
                loading: false
            });
        });
    }

    validarEmail(ev) {
        var valor = ev.target.value;
        this.setState({
            validCorreo: email(ev, valor)
        });
    }

    validarPass(ev) {
        var valor = ev.target.value;
        this.setState({
            validPass: longitudPass(ev, valor)
        })
    }

    render() {
        const { persona, loading, validCorreo,validPass } = this.state;
        return (
            <div className="row my-5">
                <div className="col-12">
                    {loading && <p>Estoy cargando.....</p>}
                    {!loading && 
                        <div className="d-flex flex-column my-5">
                            <div className="row">
                                <div className="border border-info rounded w-25 p-3 mx-auto col-10 col-sm-3">
                                    <h3 className="text-center">Inicia sesión</h3>
                                    <form className="d-flex flex-column">
                                        <input className={`mr-2 mt-2 form-control ${validCorreo ? "border-success" : validCorreo === false? "border-danger": ""}`} type="text" placeholder="Email" id="correo" onBlur={(ev) => this.validarEmail(ev)} onChange={(ev) => this.onChangeInput(ev)} />
                                            {validCorreo === false && <p className="text-danger">Lo sentimos. Formato incorrecto</p>}
                                        <input className={`mr-2 mt-2 form-control ${validPass ? "border-success" : validPass === false? "border-danger": ""}`} type="password" placeholder="Password" id="password" onBlur={(ev) => this.validarPass(ev)} onChange={(ev) => this.onChangeInput(ev)} />
                                            {/* {validPass === false && <p className="text-danger">Lo sentimos. Formato incorrecto</p>} */}
                                        <div>
                                            <button className="btn btn-primary float-right mt-2" type="submit"  onClick={(ev) => this.onLogearse(ev)}>Inicia sesión</button>
                                        </div>
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
                </div>
            </div>
        );
    }
};

export default Login;