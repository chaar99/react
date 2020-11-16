import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    
    render() {
        return (
            <div className="menu">
              es el menu
               {/* <Link to="/">Productos</Link>
               <Link to="/prueba">Registrate</Link> */}
            </div>
        );
    }
};


export default Menu;