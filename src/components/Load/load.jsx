import { Component } from 'react'

class Load extends Component {
    
    render() {
        return (            
            <div class="d-flex justify-content-center" >
                <div class="spinner-border text-primary" style={{ width: '15rem', height: '15rem' }} role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
};

export default Load;