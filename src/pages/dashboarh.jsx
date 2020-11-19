import { Component, useEffect} from 'react';
import Lista from '../components/Lista/lista';
import { Link }from "react-router-dom";

class Dashboard extends Component {

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
        debugger;
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
    
    // useEffect() {
    //     this.getProductsCar();
    // }
    // useEffect(() => {
    //     this.getProductsCar();
    // }, [])
    render() {
        const {productsCar,productos, loading} = this.state;
        
        return (
            <div>
                {loading && <p>Estoy cargando.....</p>}
                    {!loading && 
                        <div className="d-flex flex-column">
                            <p>{productsCar}</p>
                            <Lista productos={productos} addProductCart={(id, nombre)=> this.addProductCart(id, nombre)} />
                        </div>
                    }
                
            </div>
        );
    }
};

export default Dashboard;