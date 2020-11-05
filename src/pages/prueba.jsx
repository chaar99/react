import { Component } from 'react';

class Prueba extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: null,
            password: null,
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
        const {nombre, password} = this.state;
        fetch("http://localhost/aplicacion/proyectoDaw/index.php",
            {
                method: "POST",
                body: JSON.stringify({
                    nombre: nombre,
                    password,
                })
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
                        <label>Usuario:</label>
                        <input type="text" onChange={(ev) => this.onChangeInput(ev)} id="nombre" />
                        <label>Password:</label>
                        <input type="password" onChange={(ev) => this.onChangeInput(ev)} id="password" />
                        <button type="submit" onClick={(ev) => this.onLogearse(ev)}>Logearse</button>
                        <img src="./img/DNI1.jpg" width={150} />
                 </div>
                 }
            </div>
        );
    }
};

export default Prueba;