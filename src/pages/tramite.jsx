import { Component } from 'react';

class Tramite extends Component {
    constructor(props) {
        super(props);
    }

    darDeAlta(ev) {
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
        <form>
            <input type="text" placeholder="calle"/>
            <input type="text" placeholder="Detalle de calle"/>
            <input type="text" placeholder="codigo postal"/>
            <input type="text" placeholder="ciudad"/>
            <input type="text" placeholder="provincia"/>
            <input type="number" placeholder="Nº de la tarjeta"/>
            <input type="numver" placeholder="cvn"/>
            <input type="text" placeholder="titul<ar de la tarjeta"/>
            <input type="button" value="confirmar" onClick={(ev) => darDeAlta(ev)}/>
        </form>
    }
};

export default Tramite;