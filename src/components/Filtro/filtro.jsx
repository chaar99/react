import { Component } from 'react';

class Filtro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtro : null,
            persona: []
        };
    }

    filtro(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.setState({
            filtro: ev.target.value
        });
    }
    
    onLogearse(ev) {
        this.setState({
            loading: true
        });
        ev.stopPropagation();
        ev.preventDefault();
        const {filtro} = this.state;
        const objeto = {
            filtro : filtro
        }
        fetch("http://localhost/aplicacion/proyectoDaw/filtro.php",
            {
                method: 'POST',
                body: JSON.stringify(objeto),
                
            }
        ).then(res => res.json())
        .then(res => {
            this.setState({
                persona: res,
                loading: false
            });
        });
       
    }
    onClickAplicarfiltros(ev) {
        const { aplicarFiltros } = this.props;
        const { filtro } = this.state;
        ev.stopPropagation();
        ev.preventDefault();
        debugger;
        aplicarFiltros(filtro);

    }
    render() {
        const {loading, persona} = this.state;
        return (
            <div className="row my-5">
                <p>{persona}</p>
                <div className="col-12">
                    <button  id="Harry_Potter" value="harry" onClick={(ev) => this.filtro(ev)}>Harry potter</button>
                    <button id="Star_wars" onClick={(ev) => this.filtro(ev)}> Star wars</button>
                    <button type="button" className="btn btn-primary" id="" onClick={(ev) => this.onClickAplicarfiltros(ev)}>Aplicar Filtros</button>
                </div>
            </div>
        );
    }
};

export default Filtro;