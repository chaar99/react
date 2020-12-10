import { Component } from 'react';
import Lista from '../components/Lista/lista';
import Load from '../components/Load/load';

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }
   
  render() {
    const { productos, loading, addProductCart } = this.props;
    return (
      <div className="container2">
        {loading && <Load />}
        {!loading && 
          <div className="d-flex flex-column" >
            <Lista productos={productos} addProductCart={addProductCart} />
          </div>
        }
      </div>
    );
  }
};

export default Dashboard;