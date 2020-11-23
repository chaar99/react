import { Component } from 'react';
import Menu from './components/Menu/menu';
import Footer from './components/footer';
import Dashboard from './pages/dashboarh';
import Prueba from './pages/prueba';
import Login from './pages/login';
import Nuevo from './pages/nuevoProducto';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        productos : []
    };
  }
  componentDidMount() {
    this.setState({
        loading: true
    });
    fetch("http://localhost/aplicacion/proyectoDaw/index.php").then(res => res.json())
    .then(res => {
        this.setState({
            productos: res,
            loading: false
        });
    });
  }
  render() {
    const {productos, loading} = this.state;
    return (
      <div>
        <Menu />
          <Router>
              <Route exact path="/" component={()=> <Dashboard productos={productos} loading={loading} />}/>
              <Route exact path="/prueba" component={Prueba} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/nuevoProducto" component={Nuevo} />
          </Router>
      <Footer />
     </div>
    );
  }
}

export default App;