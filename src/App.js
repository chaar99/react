import { Component } from 'react';
import Menu from './components/Menu/menu';
import Footer from './components/Footer/footer';
import Dashboard from './pages/dashboarh';
import Registro from './pages/registro';
import Login from './pages/login';
import Nuevo from './pages/nuevoProducto';
import Detalle from './pages/detalle';
import Tramite from '../src/components/Tramite/tramite';

import { BrowserRouter as Router, Route } from "react-router-dom";

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

  addProductCart(id, name) {
    const { productsCar } = this.state;
    const idsProducts = productsCar;
    idsProducts.push(id);
    this.setState({
        productsCar: idsProducts
    }); 
    localStorage.setItem("productos", productsCar);
  }

  getProductsCar() {
    const idsProducts = localStorage.getItem("productos");
    this.setState({
        productsCar: idsProducts ? idsProducts.split(',') : []
    });
  }

  onEmptyCart() {
    localStorage.setItem("productos", []);
    this.setState({
      productsCar: []
    })
  }

  prueba(valores) {
    debugger;
  }

  render() {
    const { productos, loading, productsCar } = this.state;
    return (
      <div>
        <Menu productos={productos} productsCar={productsCar} onEmptyCart={(id) => this.onEmptyCart(id)} getProductsCar={() => this.getProductsCar()}/>
          <Router>
              <Route exact path="/" component={()=>
                <Dashboard
                  productos={productos}
                  loading={loading}
                  addProductCart={(id, nombre)=> this.addProductCart(id, nombre)}
                  aplicarFiltros={(valores)=> this.prueba(valores)}
                />}
              />
              <Route exact path="/registro" component={Registro} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/nuevoProducto" component={Nuevo} />
              <Route exact path="/tramite" component={Tramite} />
              <Route exact path="/detalle" component={() => <Detalle addProductCart={(id, nombre)=> this.addProductCart(id, nombre)} />} />
          </Router>
      <Footer />
     </div>
    );
  }
}

export default App;