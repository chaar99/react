import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import EditarP from './../components/Editar/editar';

class Editar extends Component {
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
      <>
        <EditarP />
      </>
    );
  }
};

export default withRouter(Editar);