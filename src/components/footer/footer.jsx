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
            <footer className="d-flex flex-column bg-dark" style={{position: 'reglative', bottom: '0', left: '0', width: '100%', height: '25%'}}>
                <div className="d-flex justify-content-center ">
                    <div className="p-2 m-2">
                        <div className="">
                            <Tw className="w-edit h-25 m-5"/>
                            <At className="w-edit h-25 m-5"/>
                            <Wh className="w-edit h-25 m-5"/>
                            <In className="w-edit h-25 m-5"/>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/">FunkoChar</a>
                </div>
            </footer>
        );
    }
};

export default Footer;