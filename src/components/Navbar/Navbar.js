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
                    <div className="font-size-15 font-weight-6">
                        Dreamentia
                    </div>
                    <div className="flex-row align-items-center">
                        <div className="mar-right-50">About</div>
                        <div className="mar-right-50">Projects</div>
                        <div>Contact</div>
                    </div>
                    <div class="orange-gradient ver-pad-8 hor-pad-25 color-white">
                        Button
                    </div>
                </div>
            </div>
            // <Nav>

            // </Nav>
        );
    }
}
 
export default Navbar;