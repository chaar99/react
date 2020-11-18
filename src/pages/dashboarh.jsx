import { Component } from 'react';
import Lista from '../components/Lista/lista';
import { Link }from "react-router-dom";

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contador : 0,
            productos : [],
            edad: 0
        };
    }
    
    componentDidMount() {
        fetch("http://localhost/aplicacion/proyectoDaw/index.php").then(res => res.json())
        .then(res => {
            this.setState({
                productos: res
            });
        });
    }

    sumarContador() {
        const {contador } = this.state;
        this.setState({
            contador: contador + 1,
        });
        
    }

    actualizarEdad(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.setState({
            edad: ev.target.value
        });
    } 

    render() {
        const {productos, contador, edad} = this.state;
        // const imag = productos.map((productoos) =>
        // <p>Imagen: {productoos.ruta}, Nombre: {productoos.nombre}, descripcion: {productoos.descripcion}</p>)
        return (
            <div>
                {/* <p>Tengo {edad} años</p>
                <button onClick={() => this.sumarContador()}>Sumar</button>
                <input type="number" onChange={(ev) => this.actualizarEdad(ev)} /> 
                <dir>{imag}</dir> */}
                <Lista productos={productos} />
            </div>
        );
    }
};

export default Dashboard;