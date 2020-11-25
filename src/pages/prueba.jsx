import { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { email, compruebaText, compruebaDNI, longitudPass } from "../utils/validaciones";

class Prueba extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: null,
            validNombe: null,
            password: null,
            validPass: null,
            correo: null,
            validCorreo: null,
            apell: null,
            validApell: null,
            dni: null,
            validDNI: null,
            loading: false,
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

    validarEmail(ev) {
        var valor = ev.target.value;
        this.setState({
            validCorreo: email(ev, valor)
        });
    }

    validarTexto(ev) {
        var valor = ev.target.value;
        this.setState({
            validNombe: compruebaText(ev, valor)
        })
    }

    validarApp(ev) {
        var valor = ev.target.value;
        this.setState({
            validApell: compruebaText(ev, valor) 
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
            nombre: nombre,
            password: password,
            correo: correo,
            apell: apell,
            dni: dni
        }
        fetch("http://localhost/aplicacion/proyectoDaw/registro_usuario.php",
            {
                method: 'POST',
                body: JSON.stringify(objeto),
            }
        ).then(
            this.setState({
                loading: false
            })
        );
    }

    render() {
        const { loading, validCorreo, validNombe, validApell, validDNI, validPass } = this.state;
        return (
            <div className="row">
                <div className="col-12">
                    {loading && <p>Estoy cargando.....</p>}
                    {!loading && 
                        <div className="d-flex flex-column my-5">
                            <div className="row">
                                <div className="border border-info rounded w-25 p-3 mx-auto col-10 col-sm-3">
                                    <h3 className="text-center">Registrate</h3>
                                    <div className="d-flex flex-column">
                                        <input className={`mr-2 mt-2 form-control ${validCorreo ? "border-success" : validCorreo == false? "border-danger": ""}`} type="text" required="required" id="correo" placeholder="Email" onBlur={(ev) => this.validarEmail(ev)} onChange={(ev) => this.onChangeInput(ev)} />
                                        <input className={`mr-2 mt-2 form-control ${validNombe ? "border-success" : validNombe == false? "border-danger": ""}`} type="text" placeholder="Name" id="nombre" onBlur={(ev) => this.validarTexto(ev)} onChange={(ev) => this.onChangeInput(ev)} />
                                        <input className={`mr-2 mt-2 form-control ${validApell ? "border-success" : validApell == false? "border-danger": ""}`} type="text" placeholder="Surname" id="apell" onBlur={(ev) => this.validarApp(ev)} onChange={(ev) => this.onChangeInput(ev)} />
                                        <input className={`mr-2 mt-2 form-control ${validPass ? "border-success" : validPass == false? "border-danger": ""}`} type="password" placeholder="Password" id="password" onBlur={(ev) => this.validarPass(ev)} onChange={(ev) => this.onChangeInput(ev)} />
                                        <input className={`mr-2 mt-2 form-control ${validDNI ? "border-success" : validDNI == false? "border-danger": ""}`} type="text" placeholder="DNI" id="dni" onBlur={(ev) => this.validarDNI(ev)} onChange={(ev) => this.onChangeInput(ev)} />
                                        <button className="btn btn-primary float-right mt-2" type="submit" onClick={(ev) => this.onLogearse(ev)}>Registrarse</button>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-3">
                                <p>¿Ya tienes una cuenta?
                                    <Link className="ml-2" to="/login">Inicia sesión</Link>
                                </p>    
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
};

export default Prueba;