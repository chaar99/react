import { Component } from 'react'

class Load extends Component {
    
    render() {
        return (            
            <div className="d-flex justify-content-center" >
                <div className="spinner-border text-primary" style={{ width: '15rem', height: '15rem' }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
};

export default Load;