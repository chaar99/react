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
      <footer className="bg-dark row text-center mx-auto">
        <div className="col-12 ">
          <div className="p-2 m-2">
            <Tw className="w-edit h-25 m-5"/>
            <At className="w-edit h-25 m-5"/>
            <Wh className="w-edit h-25 m-5"/>
            <In className="w-edit h-25 m-5"/>
          </div>
        </div>
        <div className="col-12">© 2020 Copyright:
            <a href="https://mdbootstrap.com/"> FunkoChar</a>
        </div>
      </footer>
    );
  }
};

export default Footer;