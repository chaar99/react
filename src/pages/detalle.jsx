import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DetalleP from './../components/Detalle/detalle';

class Detalle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location, addProductCart, onAddProducto } = this.props;
    if(!location.state) {
      this.props.history.push({
        pathname:'/'
      });
      return null;
    }
    return (
      <div className="container2">
        <DetalleP elemento={location.state.elemento} addProductCart={addProductCart} onAddProducto={onAddProducto}/>
      </div>
    );
  }
};

export default withRouter(Detalle);