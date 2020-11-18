import { Component } from 'react';
import { Link }from "react-router-dom";

class Nuevo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: null,
            stock: null,
            descripcion: null,  
            precio: null,
            ruta: null   
        };
    }

    onChangeInput(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.setState({
            [ev.target.id]:ev.target.value
        });
    }
    
    onLogearse(ev) {
        this.setState({
            loading: true
        });
        ev.stopPropagation();
        ev.preventDefault();
        const {nombre, stock, descripcion, precio, ruta} = this.state;
        const objeto = {
            nombre: nombre,
            stock: stock,
            descripcion: descripcion,  
            precio: precio,
            ruta: ruta 
        }
        alert(typeof(objeto));
        fetch("http://localhost/aplicacion/proyectoDaw/nuevoPorducto.php",
            {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(objeto), // data can be `string` or {object}!
                
            }
        ).then(
            this.setState({
                loading: false
            })
        );
        
    }

    render() {
        const {ruta, loading} = this.state;
        return (
            <div className="row">
                <div className="col-12">
                    {loading && <p>Estoy cargando.....</p>}
                    {!loading && 
                        <div className="d-flex flex-column">
                            <div className="row">
                                <div className="border border-info rounded w-25 p-3 mx-auto col-10 col-sm-3">
                                    <h3 className="text-center">Da de alta un nuevo producto</h3>
                                    <div className="d-flex flex-column">
                                        <p>{ruta}</p>
                                        <input className="mr-2 mt-2 form-control" type="text" placeholder="Nombre" onChange={(ev) => this.onChangeInput(ev)} id="nombre" />
                                        <input className="mr-2 mt-2 form-control" type="text" placeholder="descripcion" onChange={(ev) => this.onChangeInput(ev)} id="descripcion" />
                                        <input className="mr-2 mt-2 form-control" type="text" placeholder="stock" onChange={(ev) => this.onChangeInput(ev)} id="stock" />
                                        <input className="mr-2 mt-2 form-control" type="number" placeholder="precio" onChange={(ev) => this.onChangeInput(ev)} id="precio" />
                                        <input className="mr-2 mt-2" type="file" name="archivosubido"  onChange={(ev) => this.onChangeInput(ev)} id="ruta"/>
                                        <div>
                                            <button className="btn btn-primary float-right mt-2" type="submit" onClick={(ev) => this.onLogearse(ev)}>Dar de alta</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
};

export default Nuevo;