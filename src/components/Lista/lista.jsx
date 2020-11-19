import { Component } from 'react';
import Producto from './../Producto/producto';

class Lista extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {addProductCart, productos } = this.props;
        return (
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        {productos.map(producto => (
                            <Producto elemento={producto} addProductCart={addProductCart} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};

export default Lista;