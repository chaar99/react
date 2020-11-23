import { Component, useEffect} from 'react';
import Lista from '../components/Lista/lista';
import Filtro from '../components/Filtro/filtro';
import { Link }from "react-router-dom";

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.getProductsCar();
        this.state = {
           // loading: false,
           // productos : [],
            productsCar : []
        };
    }
    
    // componentDidMount() {
    //     this.setState({
    //         loading: true
    //     });
    //     fetch("http://localhost/aplicacion/proyectoDaw/index.php").then(res => res.json())
    //     .then(res => {
    //         this.setState({
    //             productos: res,
    //             loading: false
    //         });
    //     });
    //     debugger;
    //     this.getProductsCar();
    // }

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
        const {productsCar} = this.state;
        const {productos, loading} = this.props;
        return (
            <div>
                {loading && <p>Estoy cargando.....</p>}
                {!loading && 
                    <div className="d-flex flex-column">
                        {/* <p>{productsCar}</p> */}
                        <Filtro />
                        <Lista productos={productos} addProductCart={(id, nombre)=> this.addProductCart(id, nombre)} />
                    </div>
                }
            </div>
        );
    }
};

export default Dashboard;