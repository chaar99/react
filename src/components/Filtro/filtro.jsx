import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Filtro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtro : ""
        };
    }

    filtro(ev) {
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
                method: 'POST', // or 'PUT'
                body: JSON.stringify(objeto), // data can be `string` or {object}!
                
            }
        ).then(res => res.json())
        .then(res => {
            this.setState({
                
                persona: res,
                loading: false
            });
            debugger;
        });
       
    }

    render() {
        const {persona, loading} = this.state;
        return (
            <div className="row my-5">
                <div className="col-12">
                    
                    <button onClick={(ev) => this.filtro(ev)}>Harry potter</button>
                    <button onClick={(ev) => this.filtro(ev)}> Marvel</button>
                </div>
            </div>
        );
    }
};

export default Filtro;