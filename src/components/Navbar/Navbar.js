import React, { Component } from 'react';

// import styled from 'styled-components';


// const Nav = styled.div`
//     height: 100px;
//     background: #000;
//     width: 100%;
// `;

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="navbar flex-row justify-content-center">
                <div className="wrapper-1200 flex-row align-items-center justify-content-space-bet">
                    <div className="width-200px">
                        <div className="font-size-15 font-weight-6">Daydream</div>
                    </div>
                    <div className="flex-row align-items-center">
                        <div className="mar-right-50 color-1B1B1B nav-item translate-y-2 cursor-pointer">About</div>
                        <div className="mar-right-50 color-1B1B1B nav-item translate-y-2 cursor-pointer">Projects</div>
                        <div className="color-1B1B1B nav-item translate-y-2 cursor-pointer">Contact</div>
                    </div>
                    <div className="width-200px flex-row justify-content-end">
                        <div className="orange-gradient width-150px flex-row align-items-center justify-content-center ver-pad-8 color-white bor-radius-30 cursor-pointer box-shadow-2">Button</div>
                    </div>
                </div>
            </div>
            // <Nav>

            // </Nav>
        );
    }
}
 
export default Navbar;