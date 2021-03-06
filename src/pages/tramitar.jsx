import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Tramite from './../components/Tramite/tramite';

class Tramitar extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    const { location, productos, onAddProducto } = this.props;
    if(!location.state) {
      this.props.history.push({
        pathname:'/'
      });
      return null;
    }
    return (
      <div className="container2">
        <Tramite total={location.state.total} productsCar={location.state.productsCar} onAddProducto={onAddProducto} productos={productos} />
      </div>
    );
  }
};

export default withRouter(Tramitar);