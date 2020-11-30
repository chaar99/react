import { Component } from 'react';
import Lista from '../components/Lista/lista';
// import Filtro from '../components/Filtro/filtro';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
   
    render() {
        const { productos, loading, addProductCart } = this.props;
        return (
            <div>
                {loading && <p>Estoy cargando.....</p>}
                {!loading && 
                    <div className="d-flex flex-column">
                        {/* <Filtro aplicarFiltros={aplicarFiltros} /> */}
                        <Lista productos={productos} addProductCart={addProductCart} />
                    </div>
                }
            </div>
        );
    }
};

export default Dashboard;