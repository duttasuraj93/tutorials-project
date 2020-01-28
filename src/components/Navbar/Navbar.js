import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }

    scrollBelow = () => {
        window.scroll({top: 1000, left: 0, behavior: 'smooth' })
    }


    render() { 
        return ( 
            <div className="navbar flex-row justify-content-center height-100px">
                <div className="navbar__wrapper wrapper-1200 flex-row align-items-center justify-content-space-bet">
                    <div className="navbar__site-name width-200px">
                        <div onClick={() => this.scrollBelow()} className="font-size-15 font-weight-6 cursor-pointer">Daydream</div>
                    </div>
                    <div className="navbar__options flex-row align-items-center">
                        <div className="mar-right-50 color-1B1B1B nav-item translate-y-2 font-size-1 cursor-pointer">About</div>
                        <div className="mar-right-50 color-1B1B1B nav-item translate-y-2 font-size-1 cursor-pointer">Projects</div>
                        <div className="color-1B1B1B nav-item translate-y-2 font-size-1 cursor-pointer">Contact</div>
                    </div>
                    <div className="navbar__signup-button-container width-200px flex-row justify-content-end">
                        <div className="orange-gradient translate-y-2 width-150px flex-row align-items-center justify-content-center ver-pad-8 color-white bor-radius-30 cursor-pointer">
                            <img className="mar-right-10 height-15px" src={require('../../assets/images/user.svg')} alt=""/>
                            <div>Log In</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Navbar;