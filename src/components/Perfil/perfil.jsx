import { Component } from 'react';
import { Button } from "react-bootstrap";
import {ReactComponent as User} from "../../assets/usuario-de-perfil.svg";
import {ReactComponent as Close} from "../../assets/close.svg";

// si existe la cookie que se vean los datos dento, sino que ponga un boton para iniciar sesión
class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userOpen: false,
      usuario: {}
    };
  }

  openUser() {
    const usuario = JSON.parse(localStorage.getItem('registrado'));
    this.setState({
      userOpen: true,
      usuario, 
    });
    document.body.style.overflow = "hidden";
  }

  closeUser() {
    this.setState({
      userOpen: false
    });
    document.body.style.overflow = "scroll";
  }

  widthUserContent() {
    const { userOpen } = this.state;
    const maxWidth = window.screen.width > 600 ? 400 : window.screen.width;
    return userOpen ? maxWidth : 0;
  }

  render() {
    const { usuario } = this.state;
    return (            
      <div>
        <Button variant="link" className="user">
          <User onClick={() =>this.openUser()}/>
        </Button>
        <div className="cart-content" style={{width: this.widthUserContent()}}>
          <UserHeader closeUser={() => this.closeUser()} />
          <div className="h-100 w-auto">
            {localStorage.getItem('registrado') != "false" && <RenderUser usuario={usuario}/>}
          </div>
          <UserContentFooter usuario={usuario} />
        </div>
      </div>  
    );
  }
};

function UserHeader(props) {
  const { closeUser } = props;
  return (
    <div className="cart-content-header">
      <div>
        <Close onClick={() => closeUser()} />
        <h2>Perfil</h2>
      </div>
    </div>
  )
};
function RenderUser({ usuario }) {
  return (
    <div className="cart-content-product w- 100 h-100">
        <div className="w-100 h-100 pl-2 pt-2 text-white">
          <p>Correo: {usuario.correo}</p>
          <p>Nombre: {usuario.nombre}</p>
          <p>Apellidos: {usuario.surname_1} {usuario.surname_2 === "null"? "" : usuario.surname_2}</p>
          <p>DNI: {usuario.DNI}</p>
        </div>   
    </div>
  )
}

function UserContentFooter({ usuario }) {
  return(
    <div className="cart-content-footer">
      <Button>Cierra sesion</Button><br/>
      {/* esto no va aqui */}
      {usuario.idR === "1"? <Button> Eliminar Producto</Button>: ""}
    </div>
  )
}
export default Perfil;