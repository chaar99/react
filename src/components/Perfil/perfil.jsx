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
      cookie: true
    };
  }

  openUser() {
    this.setState({
      userOpen: true
    });
    document.body.style.overflow = "hidden";
  }

  closeUser() {
    this.setState({
      userOpen: false
    });
    document.body.style.overflow = "scroll";
  }

  widthCartContent() {
    const { userOpen } = this.state;
    return userOpen ? 400 : 0;
  }

  render() {
    const {cookie} = this.state;
    return (            
      <div>
        <Button variant="link" className="user">
          <User onClick={() =>this.openUser()}/>
        </Button>
        <div className="cart-content" style={{width: this.widthCartContent()}}>
          <UserHeader closeUser={() => this.closeUser()} />
          <div>
            <CartContentProducts cookie={cookie}/>
          </div>
        </div>
      </div>  
    );
  }
};

function UserHeader(props) {
  const { closeUser } = props;
  return (
    <div>
      <Close onClick={() => closeUser()} />
    </div>
  )
};

function CartContentProducts(props) {
  const {cookie} = props;
  return (
    <div>
        {!cookie && <Button>Inicia sesión</Button>}
        {cookie &&
          <div>
            <p>Existe la cookie</p>
            <p>nombre</p>
            <p>Apellidos</p>
            <p>Correo</p>
            <Button>Cierra sesion</Button>
          </div>   
        } 
    </div>
  )
}
export default Perfil;