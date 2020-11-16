import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: null,
            correo: null,
        };
    }

    onChangeInput(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        debugger;
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
        alert(typeof(objeto));
        fetch("http://localhost/aplicacion/proyectoDaw/inicioSesion_usuario.php",
            {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(objeto), // data can be `string` or {object}!
                
            }
        ).then(
            this.setState({
                loading: false
            })
        );
    }

    render() {
        const {nombre, loading} = this.state;
        return (
            <div className="row">
                <div className="col-12">
                    {loading && <p>Estoy cargando.....</p>}
                    {!loading && 
                        <div className="d-flex flex-column">
                            <div className="row">
                                <div className="border border-info rounded w-25 p-3 mx-auto col-10 col-sm-3">
                                    <h3 className="text-center">Inicia sesión</h3>
                                    <div className="d-flex flex-column">
                                        <input className="mr-2 mt-2 form-control" type="text" placeholder="Email" onChange={(ev) => this.onChangeInput(ev)} id="correo" />
                                        <input className="mr-2 mt-2 form-control" type="password" placeholder="Password" onChange={(ev) => this.onChangeInput(ev)} id="password" />
                                        <div>
                                            <button className="btn btn-primary float-right mt-2" type="submit" onClick={(ev) => this.onLogearse(ev)}>Inicia sesión</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-3">
                                    <p>¿No tienes una cuenta?
                                        <Link className="ml-2" to="/prueba">Registrate</Link>
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