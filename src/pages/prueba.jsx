import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Prueba extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: null,
            password: null,
            correo: null,
            apell: null,
            dni: null,
            loading: false,
            error: null
        };
    }

    onChangeName(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.setState({
            nombre: ev.target.value,
        });
    }

    onChangePassword(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.setState({
            password: ev.target.value,
        });
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
        const {nombre, password, correo, apell, dni} = this.state;
        const objeto = {
            nombre: nombre,
            password,
            correo,
            apell,
            dni
        }
        alert(typeof(objeto));
        fetch("http://localhost/aplicacion/proyectoDaw/registro_usuario.php",
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
        const {loading} = this.state;
        return (
            <div className="row">
                <div className="col-12">
                    {loading && <p>Estoy cargando.....</p>}
                    {!loading && 
                        <div className="d-flex flex-column">
                            <div className="row">
                                <div className="border border-info rounded w-25 p-3 mx-auto col-10 col-sm-3">
                                    <h3 className="text-center">Registrate</h3>
                                    <div className="d-flex flex-column">
                                        <input className="mr-2 mt-2 form-control" type="text" placeholder="Email" onChange={(ev) => this.onChangeInput(ev)} id="correo" />
                                        <input className="mr-2 mt-2 form-control" type="text" placeholder="Name" onChange={(ev) => this.onChangeInput(ev)} id="nombre" />
                                        <input className="mr-2 mt-2 form-control" type="text" placeholder="Surname" onChange={(ev) => this.onChangeInput(ev)} id="apell" />
                                        <input className="mr-2 mt-2 form-control" type="password" placeholder="Password" onChange={(ev) => this.onChangeInput(ev)} id="password" />
                                        <input className="mr-2 mt-2 form-control" type="text" placeholder="DNI" onChange={(ev) => this.onChangeInput(ev)} id="dni" />
                                        {/* <input type="file" name="archivosubido"></input> */}
                                        <div>
                                            <button className="btn btn-primary float-right mt-2" type="submit" onClick={(ev) => this.onLogearse(ev)}>Registrarse</button>
                                        </div>
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