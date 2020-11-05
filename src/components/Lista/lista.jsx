import { Component } from 'react';

class Lista extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <div>
                elementos hechos con el componente lista: {this.props.producto}
            </div>
           
        );
    }
};

export default Lista;