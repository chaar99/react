import { Component } from 'react';
import {ReactComponent as Camion} from "../../assets/camion.svg";
import {ReactComponent as Usuario} from "../../assets/usuario-de-perfil.svg";
import {ReactComponent as Tarjeta} from "../../assets/tarjeta-de-credito.svg";

import { compruebaText, compruebaDNI, telefono, cod_postal, provincias, compruebaCalle, titular, numTarjet, validarcvv, validarFech } from "../../utils/validaciones";
import './tramite.css';
import { RenderProduct } from "../cart/cart";
import { productsDetail } from "../../utils/arrayFunciones";

class Tramite extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nombre: null, validNombe: null, 
          apellido: null, validApe: null,
          dni: null, validDni: null,
          telefono: null, validaTelf: null,
          calle: null, validaCalle: null,
          detC: null, validaDet: null,
          ciudad: null, validaCiu: null,
          prov: null, validaProv: null,
          codP: null, validCodP: null,
          envio: 0, validaEnvio: false,
          tit_tarjeta: null, validaTit: null,
          num_tarjeta: null, validaNum: null,
          date: null, validaDate: null,
          cvv: null, validaCVV: null, loading: false, error: null
        };
    }

    onChangeInput(ev) {
      ev.stopPropagation();
      ev.preventDefault();
      this.setState({
          [ev.target.id]: ev.target.value,
      });
    }

    onChangeChec(ev) {
      ev.stopPropagation();
      ev.preventDefault();
      this.setState({
          envio : ev.target.value,
          validaEnvio: null
      });
    }
    validarTexto(ev, valorState) {
      this.setState({
          [valorState]: compruebaText(ev, ev.target.value)
      })
    }

    validarTel(ev) {
      this.setState({
        validaTelf: telefono(ev, ev.target.value)
      })
    }

    validarProv(ev) {
      this.setState({
        validaProv: provincias(ev, ev.target.value)
      })
    }

    validaDNI(ev) {
      this.setState({
        validDni: compruebaDNI(ev, ev.target.value)
      })
    }

    validarCalle(ev, valorState) {
      this.setState({
        [valorState]: compruebaCalle(ev, ev.target.value)
      })
    }

    validarCod(ev) {
      this.setState({
        validCodP: cod_postal(ev, ev.target.value)
      })
    }

    validaTitilar(ev) {
      this.setState({
        validaTit: titular(ev, ev.target.value)
      })
    }

    validarnumTarjet(ev) {
      this.setState({
        validaNum: numTarjet(ev, ev.target.value)
      })
    }

    validarCVV(ev) {
      this.setState({
        validaCVV: validarcvv(ev, ev.target.value)
      })
    }

    validarFecha(ev) {
      this.setState({
        validaDate: validarFech(ev, ev.target.value) 
      }) 
    }

    aceptar(ev, total) {
      this.setState({
        loading: true
      });
      ev.stopPropagation();
      ev.preventDefault();
      const { nombre, apellido, telefono, calle, detC, ciudad, prov, codP } = this.state;
      const objeto = {
        nombre: nombre, apellido: apellido, telefono: telefono, calle: calle, detC: detC, ciudad: ciudad, prov: prov, codP: codP, total: total
      }
      fetch("http://localhost/aplicacion/proyectoDaw/tramite.php",{
          method: 'POST', 
          body: JSON.stringify(objeto), 
        }
      ).then(res => {
        if (res.status === 200) {
          alert("comprado");
          this.setState({
            loading: false,
            error: null
          })
          this.navegarIndex();
          return Promise.resolve(res);
        }
      })
      .then(res => res.json())
      .catch((err) => {
        this.setState({
          error: "Revisa tus productos",
          loading: false
        });
      });
    }

    renderFirstColum() {
      const { validNombe, validaProv, validApe, validDni, validaTelf, validaCalle, validaDet, validaCiu, validCodP } = this.state;
        return (
            <div className="col-12 col-sm-3 ml-2">
                <div className="d-flex flex-row">
                  <Usuario />
                  <h4 className="w-100 p-3" style={{ borderBottom: '1px solid #4f5256'}}>Tus datos</h4>
                </div>
                <form className="d-flex flex-column my-2">            
                  <input type="text" placeholder="Nombre" id="nombre" className={`mr-2 mt-2 form-control ${validNombe ? "border-success" : validNombe === false? "border-danger": ""}`} onChange={(ev) => this.onChangeInput(ev)} onBlur={(ev) => this.validarTexto(ev, "validNombe")}/>
                    {validNombe === false && <small className="text-danger">Lo sentimos. Formato incorrecto. Revise el campo</small>}
                  <input type="text" placeholder="Apellido" id="apellido" className={`mr-2 mt-2 form-control ${validApe ? "border-success" : validApe === false? "border-danger": ""}`} onChange={(ev) => this.onChangeInput(ev)} onBlur={(ev) => this.validarTexto(ev, "validApe")}/>
                    {validApe === false && <small className="text-danger">Lo sentimos. Formato incorrecto. Revise el campo</small>}
                  <input type="text" placeholder="DNI" id="dni" className={`mr-2 mt-2 form-control ${validDni ? "border-success" : validDni === false? "border-danger": ""}`} onChange={(ev) => this.onChangeInput(ev)} onBlur={(ev) => this.validaDNI(ev) }/>
                    {validDni === false && <small className="text-danger">Lo sentimos. Formato incorrecto. Introduce un DNI válido</small>}
                  <input type="number" placeholder="Teléfono" id="telefono" className={`mr-2 mt-2 form-control ${validaTelf ? "border-success" : validaTelf === false? "border-danger": ""}`} onChange={(ev) => this.onChangeInput(ev)} onBlur={(ev) => this.validarTel(ev)}/>
                    {validaTelf === false && <small className="text-danger">Lo sentimos. Formato incorrecto. Introduce un Nº de teléfono válido</small>}
                  <input type="text" placeholder="Calle" id="calle" className={`mr-2 mt-2 form-control ${validaCalle ? "border-success" : validaCalle === false? "border-danger": ""}`} onChange={(ev) => this.onChangeInput(ev)} onBlur={(ev) => this.validarCalle(ev, "validaCalle")}/>
                    {validaCalle === false && <small className="text-danger">Lo sentimos. Formato incorrecto. Introduce una calle válida</small>}
                  <input type="text" placeholder="Detalle de la calle" className={`mr-2 mt-2 form-control ${validaDet ? "border-success" : validaDet === false? "border-danger": ""}`} id="detC" onChange={(ev) => this.onChangeInput(ev)} onBlur={(ev) => this.validarCalle(ev, "validaDet")}/>
                    {validaDet === false && <small className="text-danger">Lo sentimos. Formato incorrecto.</small>}
                  <input type="text" placeholder="Ciudad" id="ciudad" className={`mr-2 mt-2 form-control ${validaCiu ? "border-success" : validaCiu === false? "border-danger": ""}`} onChange={(ev) => this.onChangeInput(ev)} onBlur={(ev) => this.validarTexto(ev, "validaCiu")}/>
                    {validaCiu === false && <small className="text-danger">Lo sentimos. Formato incorrecto. introduce una ciudad válida</small>}
                  <input type="text" placeholder="Provincia" id="provincia" className={`mr-2 mt-2 form-control ${validaProv ? "border-success" : validaProv === false? "border-danger": ""}`} onChange={(ev) => this.onChangeInput(ev)} onBlur={(ev) => this.validarProv(ev)}/>
                    {validaProv === false && <small className="text-danger">Lo sentimos. Formato incorrecto. Introduce una provincia válida</small>}
                  <input type="text" placeholder="Código postal" id="codP" className={`mr-2 mt-2 form-control ${validCodP ? "border-success" : validCodP === false? "border-danger": ""}`} onChange={(ev) => this.onChangeInput(ev)} onBlur={(ev) => this.validarCod(ev)}/>
                    {validCodP === false && <small className="text-danger">Lo sentimos. Formato incorrecto. Introduce un codigo postal válido</small>}
                </form>
            </div>
        );
    }
  renderSecondColum() {
    const { validaEnvio } = this.state;
    return (
      <div className="col-12 col-sm-3 ml-2">
        <div className="d-flex flex-row">
          <Camion />
          <h4 className="w-100 p-3" style={{ borderBottom: '1px solid #4f5256'}}>Método de envío {validaEnvio !== null && <small className="text-danger">*</small>}</h4>
        </div>
        <form className="d-flex flex-column mt-2">
          <div className="d-flex flex-row">
            <input type="radio" name="envio" value="3.5" className="mt-2" onChange={(ev) => this.onChangeChec(ev)}/>
            <div className="w-100 d-flex flex-row ml-2">
              <img style={{ width:'60px', height:'60px'}} alt="correos" src="data:image/png;base64,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" />
              <div className="pl-2">
                <h6>Paquete estándar domicilio.</h6>
                Envíos en 6-7 días laborales a tu domicilio <br/>
                <small>3.5 €</small>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row mt-2">
            <input type="radio" name="envio" value="5.5" className="mt-2" onChange={(ev) => this.onChangeChec(ev)} required="required"/>
            <div className="w-100 d-flex flex-row ml-2">
              <img style={{ width:'60px', height:'60px'}} alt="correos" src="data:image/png;base64,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" />
              <div className="pl-2">
                <h6>Paquete premium domicilio.</h6>
                Envíos en 3-4 días laborales a tu domicilio <br/>
                <small>5.5 €</small>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row mt-2">
            <input type="radio" name="envio" value="7.5" className="mt-2" onChange={(ev) => this.onChangeChec(ev)}/>
            <div className="w-100 d-flex flex-row ml-2">
              <img style={{ width:'60px', height:'60px'}} alt="correos" src="data:image/png;base64,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" />
                <div className="pl-2">
                  <h6>Paquete expres domicilio.</h6>
                  Envíos en 24-48 horas a tu domicilio <br/>
                  <small>7.5 €</small>
                </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
    renderThirdColum() {
      const { validaTit, validaNum, validaDate, validaCVV } = this.state;
      return (
        <div className="col-12 col-sm-3 ml-2">
          <div className="d-flex flex-row">
            <Tarjeta />
            <h4 className="w-100 p-3" style={{ borderBottom: '1px solid #4f5256'}}>Método de pago</h4>
          </div>
          <form className="d-flex flex-column">
            <p>{validaDate}</p>
            <input type="text" placeholder="Titular de la tarjeta" id="tit_tarjeta" className={`mr-2 mt-2 form-control ${validaTit ? "border-success" : validaTit === false? "border-danger": ""}`} onChange={(ev) => this.onChangeInput(ev)} onBlur={(ev) => this.validaTitilar(ev)}/>
              {validaTit === false && <small className="text-danger">Lo sentimos. Formato incorrecto. Revise el campo</small>}
            <input type="text" placeholder="Nº de la tarjeta" id="n_tarjeta" className={`mr-2 mt-2 form-control ${validaNum ? "border-success" : validaNum === false? "border-danger": ""}`} onChange={(ev) => this.onChangeInput(ev)} onBlur={(ev) => this.validarnumTarjet(ev)}/>
              {validaNum === false && <small className="text-danger">Lo sentimos. Formato incorrecto. Revise el campo</small>}
            <label>Fecha de expiración</label>
            <input type="month" id="date"  className={`mr-2 mt-2 form-control ${validaDate ? "border-success" : validaDate === false? "border-danger": ""}`} onChange={(ev) => this.onChangeInput(ev)} onBlur={(ev) => this.validarFecha(ev)}/>
              {validaDate === false && <small className="text-danger">Lo sentimos. Formato incorrecto. Revise el campo</small>}
            <input type="number" placeholder="CVV" id="cvv" className={`mr-2 mt-2 form-control ${validaCVV ? "border-success" : validaCVV === false? "border-danger": ""}`} onChange={(ev) => this.onChangeInput(ev)} onBlur={(ev) => this.validarCVV(ev)}/>
              {validaCVV === false && <small className="text-danger">Lo sentimos. Formato incorrecto. Revise el campo</small>}
          </form>
        </div>
      );
    }
    renderDetail(productosDetail) {
      const {total, productsCar} = this.props;
      const { envio } = this.state;
      var suma = parseInt(total) + parseFloat(envio);
      return(
        <div className=" col-12">
          <h4 className="w-100 p-3">Resumen</h4>
          <div className="row">
            {productosDetail.map((producto, index) =>
              <div className="col-12 col-md-4 col-sm-6">
                <RenderProduct
                  producto={producto}
                  key={index}
                  quantity={producto.quantity}
                />
              </div>
            )}
          </div>
          <div className="text-right pr-3 pb-2">
            <p>Precio por {productsCar.length} Funkos: {total} €</p>
            <p>Precio por gasto de envío: {envio} €</p>
            <p>Total: {suma} €</p>
            <button className="btn btn-primary" onClick={(ev, total) => this.aceptar(ev, suma)}>Aceptar</button>
          </div>
        </div>
      )
    }
    render() {
      const { productos, productsCar } = this.props;
      const productosDetail = productsDetail(productos, productsCar);
      return (
        <>
          <div className="tramite row mx-auto my-5">
            <div className="col-12 col-sm-1"></div>
            {this.renderFirstColum()}
            {this.renderSecondColum()}
            {this.renderThirdColum()}
            <div className="col-12 col-sm-1"> </div>
          </div>
          <div className="row mx-auto">
            {this.renderDetail(productosDetail)}
          </div>
        </>
      );
    }
};

export default Tramite;