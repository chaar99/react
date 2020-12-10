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
    // const {persona} = this.props;
    return (            
      <div>
        <Button variant="link" className="user">
          <User onClick={() =>this.openUser()}/>
        </Button>
        <div className="cart-content" style={{width: this.widthCartContent()}}>
          <UserHeader closeUser={() => this.closeUser()} />
          <div>
            {/* <UserContent persona={persona}/> */}
          </div>
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

// function UserContent(props) {
//   const { persona } = props;
//   return (
//     <div>
//       <p>hola</p>
//         {persona.map((user, index) => (
//           <RenderUser usuario={user} key={index} />
//         ))}        
//     </div>
//   )
// }

// function RenderUser(props){
//   const {usuario} = props;
//   return (
//     <div>
//         <div>
//           <p>Existe la cookie</p>
//           <p>nombre: {usuario.nombre}</p>
//           <p>Apellidos</p>
//           <p>Correo</p>
//           <Button>Cierra sesion</Button>
//         </div>   
//     </div>
//   )
// }
export default Perfil;