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
        this.state = { 

        }
    }
    render() { 
        return ( 
            <div className="navbar flex-row justify-content-center orange-gradient">
                <div className="navbar__wrapper wrapper-1200 flex-row align-items-center justify-content-space-bet">
                    <div className="navbar__site-name width-200px">
                        <div className="font-size-15 font-weight-6">Daydream</div>
                    </div>
                    <div className="navbar__options flex-row align-items-center">
                        <div className="mar-right-50 color-white nav-item translate-y-2 font-size-1 cursor-pointer">About</div>
                        <div className="mar-right-50 color-white nav-item translate-y-2 font-size-1 cursor-pointer">Projects</div>
                        <div className="color-white nav-item translate-y-2 font-size-1 cursor-pointer">Contact</div>
                    </div>
                    <div className="navbar__signup-button-container width-200px flex-row justify-content-end">
                        <div className="navbar__signup-button bgcolor-07c4f1 width-150px flex-row align-items-center justify-content-center ver-pad-8 color-white bor-radius-30 cursor-pointer box-shadow-2">Sign Up</div>
                    </div>
                </div>
            </div>
            // <Nav>

            // </Nav>
        );
    }
}
 
export default Navbar;