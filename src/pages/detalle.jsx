import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DetalleP from './../components/Detalle/detalle';
class Detalle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { location, addProductCart } = this.props;
        if(!location.state) {
            this.props.history.push({
                pathname:'/'
            });
            return null;
        }
        return (
            <div>
                <DetalleP elemento={location.state.elemento} addProductCart={addProductCart} />
            </div>
        );
    }
};

export default withRouter(Detalle);