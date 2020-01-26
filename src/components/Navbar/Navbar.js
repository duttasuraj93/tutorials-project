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
                        <div className="mar-right-50 color-1B1B1B">About</div>
                        <div className="mar-right-50 color-1B1B1B">Projects</div>
                        <div className="color-1B1B1B">Contact</div>
                    </div>
                    <div className="width-200px flex-row justify-content-end">
                        <div class="orange-gradient ver-pad-8 hor-pad-30 color-white bor-radius-30 cursor-pointer">Button</div>
                    </div>
                </div>
            </div>
            // <Nav>

            // </Nav>
        );
    }
}
 
export default Navbar;