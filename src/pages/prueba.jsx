import { Component } from 'react';

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
        const {nombre, loading} = this.state;
        return (
            <div className="c-footer">
                {loading && <p>Estoy cargando.....</p>}
                {!loading && 
                    <div>
                        <h1>Soy la pagina de prueba del login</h1>
                        <p>El nombre es : {nombre}</p>
                        <label>Correo:</label>
                        <input type="text" onChange={(ev) => this.onChangeInput(ev)} id="correo" />
                        <label>Nombre de usuario:</label>
                        <input type="text" onChange={(ev) => this.onChangeInput(ev)} id="nombre" />
                        <label>Apellido:</label>
                        <input type="text" onChange={(ev) => this.onChangeInput(ev)} id="apell" />
                        <label>Password:</label>
                        <input type="password" onChange={(ev) => this.onChangeInput(ev)} id="password" />
                        <label>DNI:</label>
                        <input type="text" onChange={(ev) => this.onChangeInput(ev)} id="dni" />
                        <button type="submit" onClick={(ev) => this.onLogearse(ev)}>Logearse</button>
                        <img src="./img/DNI1.jpg" width={150} />
                 </div>
                 }
            </div>
        );
    }
};

export default Prueba;