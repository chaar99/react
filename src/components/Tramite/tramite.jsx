import { Component } from 'react';
import {ReactComponent as Camion} from "../../assets/camion.svg";
import {ReactComponent as Usuario} from "../../assets/usuario-de-perfil.svg";
import {ReactComponent as Tarjeta} from "../../assets/tarjeta-de-credito.svg";

import './tramite.css';
class Tramite extends Component {
    constructor(props) {
        super(props);
    }

    renderFirstColum() {
        return (
            <div className="border border-info rounded col-3">
                <div className="d-flex flex-row">
                    <Usuario />
                    <h4 className="w-100 p-3" style={{ borderBottom: '1px solid #4f5256'}}>Tus datos</h4>
                </div>
                <form className="d-flex flex-column">
                    <input type="text" placeholder="Nombre"/>
                    <input type="text" placeholder="Apellido"/>
                    <input type="text" placeholder="DNI"/>
                    <input type="number" placeholder="Teléfono"/>
                    <input type="text" placeholder="Calle"/>
                    <input type="text" placeholder="Detalle de la calle"/>
                    <input type="text" placeholder="Ciudad"/>
                    <input type="text" placeholder="Provincia"/>
                    <input type="text" placeholder="Código postal"/>
                </form>
            </div>
        );
    }
    renderSecondColum() {
        return (
            <div className="border border-info rounded col-3">
                <div className="d-flex flex-row">
                    <Camion />
                    <h4 className="w-100 p-3" style={{ borderBottom: '1px solid #4f5256'}}>Método de envío</h4>
                </div>
                <form className="d-flex flex-column">
                    <div>
                        <input type="radio" id="male" name="gender" value="male" />
                        <label>Paq Estándar Oficina
                            Envíos en 2-3 días laborables a la oficina que tú elijas, desde el envío del pedido.</label>
                    </div>
                    <div>
                        <input type="radio" id="male" name="gender" value="male" />
                        <label>Paq Estándar Oficina
                            Envíos en 2-3 días laborables a la oficina que tú elijas, desde el envío del pedido.</label>
                    </div>
                    <div>
                        <input type="radio" id="male" name="gender" value="male" />
                        <label>Paq Estándar Oficina
                            Envíos en 2-3 días laborables a la oficina que tú elijas, desde el envío del pedido.</label>
                    </div>
                    
                    <div className="d-flex flex-row">
                        <input type="radio" id="male" name="gender" value="male" />
                        <img style={{ width:'50px', height:'50px'}} src="./img/voldemort.jpg" />
                        <p>Paq Estándar Oficina
                            Envíos en 2-3 ssssssssssssssssssss ssssssssssssd</p>
                    </div>
                </form>
            </div>
        );
    }
    renderThirdColum() {
      return (
        <div className="border border-info rounded col-3">
          <div className="d-flex flex-row">
            <Tarjeta />
            <h4 className="w-100 p-3" style={{ borderBottom: '1px solid #4f5256'}}>Método de pago</h4>
          </div>
          <form className="d-flex flex-column">
            <input type="text" placeholder="Titular de la tarjeta" />
            <input type="text" placeholder="Nº de la tarjeta" />
            <input type="text" placeholder="Nº de la tarjeta" />
            <input type="text" placeholder="Nº de la tarjeta" />
          </form>
        </div>
      );
    }
    render() {
      return (
        <div className="tramite row my-5">
          {this.renderFirstColum()}
          {this.renderSecondColum()}
          {this.renderThirdColum()}
        </div>
      );
    }
};

export default Tramite;