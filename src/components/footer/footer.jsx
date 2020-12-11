import { Component } from 'react';
import {ReactComponent as Tw} from "../../assets/twitter.svg";
import {ReactComponent as Fc} from "../../assets/facebook.svg";
import {ReactComponent as Wh} from "../../assets/whatsapp.svg";
import {ReactComponent as In} from "../../assets/instagram.svg";

import './footer.css';
class Footer extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="bg-dark">
        <div className="row mx-auto">
          <div className="col-12 text-center">
            <Tw className="w-edit my-3 mx-5"/>
            <Fc className="w-edit my-3 mx-5"/>
            <Wh className="w-edit my-3 mx-5"/>
            <In className="w-edit my-3 mx-5"/>
          </div>
          <div className="col-12 text-center enlaceF mb-2">© 2020 Copyright:
            <a href="https://mdbootstrap.com/"> FunkoChar</a>
          </div>
        </div>
      </div>
    );
  }
};

export default Footer;