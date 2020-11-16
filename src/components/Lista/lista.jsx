import { Component } from 'react';
import Producto from './../Producto/producto';

class Lista extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { productos } = this.props;
        return (
            // <div className="d-inline-block">
            //     {productos.map(producto => (
            //         <Producto elemento={producto} />
            //     ))}
            // </div>
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        {productos.map(producto => (
                            <Producto elemento={producto} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};

export default Lista;