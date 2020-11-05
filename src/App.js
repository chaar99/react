import { Component } from 'react';
import Menu from './components/menu';
import Footer from './components/footer';
import Dashboard from './pages/dashboarh';
import Prueba from './pages/prueba';

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
        <div>
          <Router>
            <div>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/prueba" component={Prueba} />
            </div>
          </Router>
      </div>
      <Footer />
     </div>
    );
  }
}

export default App;