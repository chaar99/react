import { Component } from 'react';
import { Button } from "react-bootstrap";

class Cart extends Component {
    constructor(props) {
        super(props);
       
    }

    render() {
        
        return (
            
            <div>
                <Button variant="link">Carrito</Button>
                <div>Todos mis productos</div>
            </div>
            
        );
    }
};

export default Cart;