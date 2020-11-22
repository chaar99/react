import { Component } from 'react';
import { Button } from "react-bootstrap";
import {ReactComponent as CartEmpty} from "../../assets/cart-empty.svg";
import {ReactComponent as Close} from "../../assets/close.svg";
import {ReactComponent as Vaciar} from "../../assets/garbage.svg";

import './cart.css';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartOpen: false
        };
    }
    
    openCar(){
        this.setState({
            cartOpen: true
        });
        document.body.style.overflow = "hidden";
    }
    closeCar(){
        this.setState({
            cartOpen: false
        });
        document.body.style.overflow = "scroll";
    }
    emptyCar(){
        localStorage.removeItem("productos");
    }
    widthCartContent(){
        const {cartOpen} = this.state;
        return cartOpen? 400: 0;
    }
    render() {
        return (
            <div>
                <Button variant="link" className="cart">
                    <CartEmpty onClick={() =>this.openCar()}/>
                </Button>
                <div className="cart-content" style={{width: this.widthCartContent()}}>
                    <CartContentHeader closeCar={() => this.closeCar()} emptyCar={() => this.emptyCar()}/>
                </div>
            </div>
        );
    }
};

function CartContentHeader(props){
    const { closeCar, emptyCar} = props;
    return (
        <div className="cart-content-header">
            <div>
                <Close onClick={() => closeCar()} />
                <h2>Carrito</h2>
            </div>
            <Button variant="link">
                vaciar
                <Vaciar onClick={() => emptyCar()} />
            </Button>
        </div>
    )
}
export default Cart;