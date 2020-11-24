import { Component } from 'react';
import { Button } from "react-bootstrap";
import {ReactComponent as CartEmpty} from "../../assets/cart-empty.svg";
import {ReactComponent as Close} from "../../assets/close.svg";
import {ReactComponent as Vaciar} from "../../assets/garbage.svg";
import {removeArrayDuplicates} from '../../utils/arrayFunciones'

import './cart.css';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartOpen: false,
        };
    }
    
    openCar() {
        this.setState({
            cartOpen: true
        });
        document.body.style.overflow = "hidden";
    }

    closeCar() {
        this.setState({
            cartOpen: false
        });
        document.body.style.overflow = "scroll";
    }

    emptyCar() {
        localStorage.removeItem("productos");
    }

    widthCartContent() {
        const { cartOpen } = this.state;
        return cartOpen ? 400 : 0;
    }

    render() {
        const { productos, productsCar, onEmptyCart } = this.props;
        const allProductsId = removeArrayDuplicates(productsCar);
        return (
            <div>
                <Button variant="link" className="cart">
                    <CartEmpty onClick={() =>this.openCar()}/>
                </Button>
                <div className="cart-content" style={{width: this.widthCartContent()}}>
                    <CartContentHeader closeCar={() => this.closeCar()} onEmptyCart={onEmptyCart}/>
                    {allProductsId.map((idProductsCart, index) =>(
                        <CartContentProducts productos={productos} key={index} idsProductsCart={productsCar} idProductsCart={idProductsCart}/>
                    ))}
                </div>
            </div>
        );
    }
};

function CartContentHeader(props) {
    const { closeCar, onEmptyCart } = props;
    return (
        <div className="cart-content-header">
            <div>
                <Close onClick={() => closeCar()} />
                <h2>Carrito</h2>
            </div>
            <Button variant="link" onClick={() => onEmptyCart()}>
                vaciar
                <Vaciar/>
            </Button>
        </div>
    )
};

function CartContentProducts(props) {
    const { productos } = props;
    return "productos..."
}
export default Cart;