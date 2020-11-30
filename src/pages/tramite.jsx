import { Component } from 'react';

class Tramite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    // darDeAlta(ev) {
    //     this.setState({
    //         loading: true
    //     });
    //     ev.stopPropagation();
    //     ev.preventDefault();
    //     const { nombre, password, correo, apell, dni } = this.state;
    //     const objeto = {
    //         nombre: nombre,
    //         password: password,
    //         correo: correo,
    //         apell: apell,
    //         dni: dni
    //     }
    //     fetch("http://localhost/aplicacion/proyectoDaw/registro_usuario.php",
    //         {
    //             method: 'POST',
    //             body: JSON.stringify(objeto),
    //         }
    //     ).then(
    //         this.setState({
    //             loading: false
    //         })
    //     );
    // }

    render() {
        const { loading } = this.state;
        return (
            <div className="row">
                <div className="col-12">
                    {loading && <p>Estoy cargando.....</p>}
                    {!loading && 
                        <div className="d-flex flex-column my-5">
                            <div className="row">
                                <div className="border border-info rounded w-25 p-3 col-3 mx-5">
                                    <h4 className="text-center">Tus datos</h4>
                                    <form>
                                        <input className="mr-2 mt-2 form-control" type="text" placeholder="Dirección"/>
                                        <input type="text" placeholder="Detalle"/>
                                        <input type="text" placeholder="código postal"/>
                                        <input type="text" placeholder="ciudad"/>
                                        {/* la provincia la puedo cambiar por una select */}
                                        <input type="text" placeholder="provincia"/>
                                        <input type="number" placeholder="Nº de la tarjeta"/>
                                        <input type="numver" placeholder="cvn"/>
                                        <input type="text" placeholder="titular de la tarjeta"/>
                                        {/* se puede añadir el boton de aceptar terminos */}
                                    </form>
                                </div>
                                <div className="border border-info rounded w-25 p-3 col-3 col-sm-3 mx-5">    
                                    <h3>Método de envío</h3>
                                    <form>
                                    <input type="text" placeholder="calle"/>
                                        <input type="text" placeholder="Detalle de calle"/>
                                        <input type="text" placeholder="codigo postal"/>
                                        <input type="text" placeholder="ciudad"/>
                                        <input type="text" placeholder="provincia"/>
                                        <input type="number" placeholder="Nº de la tarjeta"/>
                                        <input type="numver" placeholder="cvn"/>
                                        <input type="text" placeholder="titular de la tarjeta"/>
                                    </form>
                                </div>
                                <div className="border border-info rounded col-3 mx-5">    
                                    <h3>Método de pago </h3>
                                    <form>
                                        <input type="text" placeholder="calle"/>
                                        <input type="text" placeholder="Detalle de calle"/>
                                        <input type="text" placeholder="codigo postal"/>
                                        <input type="text" placeholder="ciudad"/>
                                        <input type="text" placeholder="provincia"/>
                                        <input type="number" placeholder="Nº de la tarjeta"/>
                                        <input type="numver" placeholder="cvn"/>
                                        <input type="text" placeholder="titular de la tarjeta"/>
                                    </form>
                                </div>
                            </div>
                            <div className="row">
                                <div className="border border-info rounded w-25 p-3 mx-auto col-10 mx-5">
                                    <p>Detalles</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
};

export default Tramite;