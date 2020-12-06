import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Tramite from './../components/Tramite/tramite';

class Tramitar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { location } = this.props;
        if(!location.state) {
            this.props.history.push({
                pathname:'/'
            });
            return null;
        }
        return (
            <div>
                <Tramite total={location.state.total} productsCar={location.state.productsCar}/>
            </div>
        );
    }
};

export default withRouter(Tramitar);