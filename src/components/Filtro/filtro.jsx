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

    render() {
        const {loading, persona} = this.state;
        return (
            <div className="row my-5">
                <p>{persona}</p>
                <div className="col-12">
                    <button  id="Harry_Potter" onClick={(ev) => this.filtro(ev)}>Harry potter</button>
                    <button id="Star_wars" onClick={(ev) => this.filtro(ev)}> Star wars</button>
                </div>
            </div>
        );
    }
};

export default Filtro;