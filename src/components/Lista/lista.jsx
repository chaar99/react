import { Component } from 'react';
import Producto from './../Producto/producto';

class Lista extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { productos } = this.props;
        return (
            <div className="productos">
                <h1>Soy el componente Lista</h1>
                {productos.map(producto => (
                    <Producto elemento={producto} />
                ))}
            </div>
           
        );
    }
};

export default Lista;