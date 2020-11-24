import { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";

class Prueba extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: null,
            password: null,
            correo: null,
            validCorreo: null,
            apell: null,
            dni: null,
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
        ev.stopPropagation();
        ev.preventDefault();
        var valor = ev.target.value;
        if(/^[a-zA-Z0-9.]+@[a-zA-Z]{5,10}.[a-zA-Z]{2,3}$/.test(valor)){
            this.setState({
                validCorreo: true
            });
        } else {
            this.setState({
                validCorreo: false
            });
        }
    }

    validarTexto(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        var valor = ev.target.value;
        if(/^[a-zA-Z]+$/.test(valor)){
            // poner el cuadrado a verde
        } else {
            //poner cuadrado a rojo
        }
    }

    onLogearse(ev) {
        this.setState({
            loading: true
        });
        ev.stopPropagation();
        ev.preventDefault();
        const {nombre, password, correo, apell, dni} = this.state;
        const objeto = {
            nombre: nombre,
            password,
            correo,
            apell,
            dni
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
        const { loading, validCorreo } = this.state;
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
                                        <input className={`mr-2 mt-2 form-control ${validCorreo ? "border-success" : "border-danger"}`} type="text" required="required" id="correo" placeholder="Email" onBlur={(ev) => this.validarEmail(ev)} onChange={(ev) => this.onChangeInput(ev)} />
                                        <input className="mr-2 mt-2 form-control" type="text" placeholder="Name" onBlur={(ev) => this.validarTexto(ev)} onChange={(ev) => this.onChangeInput(ev)} id="nombre" />
                                        <input className="mr-2 mt-2 form-control" type="text" placeholder="Surname" onBlur={(ev) => this.validarTexto(ev)} onChange={(ev) => this.onChangeInput(ev)} id="apell" />
                                        <input className="mr-2 mt-2 form-control" type="password" placeholder="Password" onChange={(ev) => this.onChangeInput(ev)} id="password" />
                                        <input className="mr-2 mt-2 form-control" type="text" placeholder="DNI" onChange={(ev) => this.onChangeInput(ev)} id="dni" />
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