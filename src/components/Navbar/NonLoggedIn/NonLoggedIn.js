import React, { Component } from 'react';
import 'rodal/lib/rodal.css';
import Rodal from 'rodal';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';


class NonLoggedIn extends Component {
    constructor(props) {
        super(props);
        this.openRegisterModal = this.openRegisterModal.bind(this);

        this.state = {
            showLoginModal: false,
            showRegisterModal: false,
        }
    }

    openLoginModal = () => {
        this.setState({
            showLoginModal: true
        })
    }

    closeLoginModal = () => {
        this.setState({
            showLoginModal: false
        })
    }

    openRegisterModal = () => {
        this.setState({
            showLoginModal: false,
            showRegisterModal: true
        })
    }

    closeRegisterModal = () => {
        this.setState({
            showRegisterModal: false
        })
    }


    render() { 
        return (
            <React.Fragment>
                <div onClick={() => this.openLoginModal()} className="primary-background translate-y-2 width-150px flex-row align-items-center justify-content-center ver-pad-8 color-white bor-radius-30 cursor-pointer">
                    <img className="mar-right-10 height-15px" src={require('../../../assets/images/user.svg')} alt=""/>
                    <div>Log In</div>
                </div>
                <Rodal customStyles={{height: "fit-content"}}  visible={this.state.showLoginModal} onClose={() => this.closeLoginModal()} >
                    <LoginModal onClick={() => this.openRegisterModal()} />
                </Rodal>
                <Rodal customStyles={{height: "fit-content"}}  visible={this.state.showRegisterModal} onClose={() => this.closeRegisterModal()} >
                    <RegisterModal />
                </Rodal>
            </React.Fragment>
        )
    }
}
 
export default NonLoggedIn;