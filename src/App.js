import { Component } from 'react';
import Menu from './components/Menu/menu';
import Footer from './components/Footer/footer';
import Dashboard from './pages/dashboarh';
import Registro from './pages/registro';
import Login from './pages/login';
import Nuevo from './pages/nuevoProducto';
import Detalle from './pages/detalle';
import Tramitar from './pages/tramitar';
import Editar from './pages/editar';

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      productos : [],
      productsCar : [], persona: []
    };
  }

  componentDidMount() {
    this.obtenerProductos();
    this.ObtenerUser();
  }

  ObtenerUser() {
    debugger;
    if( localStorage.getItem("registrado") === "true") {
      this.setState({
        loading: true
      });
      fetch("http://localhost/aplicacion/proyectoDaw/usuario.php").then(res => res.json())
      .then(res => {
        this.setState({
          persona: res,
          loading: false
        });
      });
    }
  }

  obtenerProductos() {
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

  // prueba(valores) {
  //   debugger;
  // }

  render() {
    const { productos, loading, productsCar, persona } = this.state;
    return (
      <Router>
          {/* persona={persona} */}
          <Menu productos={productos} productsCar={productsCar}  onEmptyCart={(id) => this.onEmptyCart(id)} getProductsCar={() => this.getProductsCar()}/>
          <Route exact path="/" component={()=>
            <Dashboard
              productos={productos}
              loading={loading}
              addProductCart={(id, nombre)=> this.addProductCart(id, nombre)}
              // aplicarFiltros={(valores)=> this.prueba(valores)}
            />}
          />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/nuevoProducto" component={() =>
            <Nuevo onAddProducto={() => this.obtenerProductos()} />} />
          <Route exact path="/tramite" component={() =>
            <Tramitar
              productos={productos}
            />}
          />
          <Route exact path="/detalle" component={() => <Detalle addProductCart={(id, nombre)=> this.addProductCart(id, nombre)} />} />
          <Route exact path="/editar" component={Editar} />
          <Footer />
      </Router>
    );
  }
}

export default App;