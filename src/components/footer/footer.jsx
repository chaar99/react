import { Component } from 'react';
import {ReactComponent as Tw} from "../../assets/twitter.svg";
import {ReactComponent as At} from "../../assets/at.svg";
import {ReactComponent as Wh} from "../../assets/whatsapp.svg";
import {ReactComponent as In} from "../../assets/instagram.svg";


import './footer.css';
class Footer extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="footer2 bg-dark">
        <div className="row mx-auto">
          <div className="col-12 text-center">
              <Tw className="w-edit h-25 m-5"/>
              <At className="w-edit h-25 m-5"/>
              <Wh className="w-edit h-25 m-5"/>
              <In className="w-edit h-25 m-5"/>
          </div>
          <div className="col-12 text-center">© 2020 Copyright:
              <a href="https://mdbootstrap.com/"> FunkoChar</a>
          </div>
        </div>
      </div>
      
    );
  }
};

export default Footer;