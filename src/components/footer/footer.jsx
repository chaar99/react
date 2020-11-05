import { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.sumarContador = this.sumarContador.bind(this);
        this.state = {
            contador : 0
        };
    }

    sumarContador() {
        const {contador } = this.state;
        this.setState({
            contador: contador + 1,
        });
        
    }
    

    render() {
        const { contador } = this.state;
        const { texto, productos } = this.props;
        return (
            <div className="c-footer">
                <div>{texto}</div>
                <button onClick={this.sumarContador}>clickame</button>
                <p>El valor acumulado es {contador}</p>
                <div className="productos">
                 
                </div>
            </div>
        );
    }
};

export default Footer;