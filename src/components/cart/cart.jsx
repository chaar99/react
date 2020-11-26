import { Component } from 'react';
import { Button } from "react-bootstrap";
import {ReactComponent as CartEmpty} from "../../assets/cart-empty.svg";
import {ReactComponent as Close} from "../../assets/close.svg";
import {ReactComponent as Vaciar} from "../../assets/garbage.svg";
import {removeArrayDuplicates, countDuplicatesItemArray, removeItemArray} from '../../utils/arrayFunciones'

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

    increaseQuantity(id) {
        const { productsCar, getProductsCar } = this.props;
        const arrayItemsCart = productsCar;
        arrayItemsCart.push(id);
        localStorage.setItem("productos", arrayItemsCart);
        getProductsCar();
    }

    decreaseQuantity(id) {
        const { productsCar, getProductsCar } = this.props;
        const result = removeItemArray(productsCar, id.toString());
        localStorage.setItem("productos", result);
        getProductsCar();
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
                        <CartContentProducts productos={productos} increaseQuantity={(id) => this.increaseQuantity(id)} 
                            decreaseQuantity={(id) => this.decreaseQuantity(id)} key={index} idsProductsCart={productsCar} idProductsCart={idProductsCart}/>
                    ))}
                    <CartContentFooter />
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
    const { productos, idsProductsCart, idProductsCart, increaseQuantity, decreaseQuantity } = props;
    return productos.map((producto, index) => {
        if(producto.id_productos === idProductsCart){
            const quantity = countDuplicatesItemArray(producto.id_productos, idsProductsCart);
            return(
                <RenderProduct 
                    key={index}
                    producto={producto}
                    quantity={quantity}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                />
            )
        }
    })
}

function RenderProduct(props) {
    const { producto, quantity, increaseQuantity, decreaseQuantity } = props;
    return(
        <div className="contenido">
            <img src={"./img/"+ producto.ruta} style={{ height: 25, width:50 }} />
            <div>
                <div>
                    <h3>{producto.nombre}</h3>
                    <p>{producto.precio}€ / Unidad</p>
                </div>
                <div>
                    <p>cantidad: {quantity}</p>
                    <div>
                        <button onClick={() => increaseQuantity(producto.id_productos)}>+</button>
                        <button onClick={() => decreaseQuantity(producto.id_productos)}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CartContentFooter(props) {
    const { cartTotalPre } = props;
    return(
        <div>
            <div>
                <p>Total: </p>
                {/* <p>{cartTotalPre} €</p>  */}
                <p>98</p>
            </div>
            <button>Tramitar pedido</button>
        </div>
    )
}
export default Cart;