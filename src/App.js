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
        productos : [],
        productsCar : []
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
    this.getProductsCar();
  }
  addProductCart(id, name){
    const { productsCar } = this.state;
    const idsProducts = productsCar;
    idsProducts.push(id);
    this.setState({
        productsCar: idsProducts
    }); 
    
    localStorage.setItem("productos", productsCar);
    // console.log(`Has añadido el priducto ${name} con elID ${id} al carrito`)
  }

  getProductsCar(){
      const idsProducts = localStorage.getItem("productos");
      if(idsProducts) {
          const idsProductsSplit = idsProducts.split(',');
          this.setState({
              productsCar: idsProductsSplit
          });
      }else{
          this.setState({
              productsCar: []
          });
      }
  }
  render() {
    const {productos, loading, productsCar} = this.state;
    return (
      <div>
        <Menu productos={productos} productsCar={productsCar}/>
          <Router>
              <Route exact path="/" component={()=> <Dashboard productos={productos} loading={loading} addProductCart={(id, nombre)=> this.addProductCart(id, nombre)}/>}/>
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