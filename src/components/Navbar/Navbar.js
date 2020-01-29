import React, { Component } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible: false
        }
    }

    scrollBelow = () => {
        window.scroll({top: 1000, left: 0, behavior: 'smooth' })
    }

    closeLoginModal = () => {
        this.setState({
            visible: false
        })
    }

    openLoginModal = () => {
        this.setState({
            visible: true
        })
    }


    render() { 
        return ( 
            <div className="navbar flex-row justify-content-center height-100px ">
                <div className="navbar__wrapper wrapper-1200 flex-row align-items-center justify-content-space-bet">
                    <div className="flex-row">
                        <div className="navbar__site-name mar-right-50">
                            <div onClick={() => this.scrollBelow()} className="font-size-15 font-weight-6 cursor-pointer color-07c4f1">Daydream</div>
                        </div>
                        <div className="navbar__options flex-row align-items-center">
                            <div className="mar-right-50 color-f5af19 nav-item translate-y-2 font-size-1 cursor-pointer">About</div>
                            <div className="mar-right-50 color-f5af19 nav-item translate-y-2 font-size-1 cursor-pointer">Projects</div>
                            <div className="color-f5af19 nav-item translate-y-2 font-size-1 cursor-pointer">Contact</div>
                        </div>
                    </div>
                    <div className="navbar__signup-button-container flex-row justify-content-end">
                        {/* <div onClick={() => this.openLoginModal()} className="orange-gradient translate-y-2 width-150px flex-row align-items-center justify-content-center ver-pad-8 color-white bor-radius-30 cursor-pointer">
                            <img className="mar-right-10 height-15px" src={require('../../assets/images/user.svg')} alt=""/>
                            <div>Log In</div>
                        </div>
                        <Rodal visible={this.state.visible} onClose={() => this.closeLoginModal()} >
                            <div>Content</div>
                        </Rodal> */}
                        <div className="pos-relative">
                            <div className="flex-row align-items-center">
                                <img src={require('../../assets/images/panda.svg')} alt="" className="bgcolor-1B1B1B height-width-50 bor-radius-full box-shadow-white bor-2px-f5af19 mar-right-10 object-fit-cover"/>
                                <div className="pos-relative">
                                    <div className="navbar__dropdown-icon-container width-40px ver-pad-20 flex-row justify-content-center align-items-center cursor-pointer">
                                        <img className="height-10px object-fit-cover" src={require('../../assets/images/down-arrow-orange.svg')} alt=""/>
                                    </div>
                                    <div className="navbar__dropdown bgcolor-07c4f1 pos-absolute width-200px">
                                        <div className="color-white ver-pad-8 cursor-pointer translate-y-2">Profile</div>
                                        <div className="color-white ver-pad-8 cursor-pointer translate-y-2">About</div>
                                        <div className="color-white ver-pad-8 cursor-pointer translate-y-2">Projects</div>
                                        <div className="color-white ver-pad-8 cursor-pointer translate-y-2">Contact</div>
                                        <div className="color-white ver-pad-8 cursor-pointer translate-y-2">Sign Out</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Navbar;