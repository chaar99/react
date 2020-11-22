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
  
  render() {
    return (
      <div>
        <Menu />
          <Router>
              <Route exact path="/" component={Dashboard} />
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