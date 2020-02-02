import React from 'react';
import { useAuth } from "../../../auth";
import toast from '../../../config/toast';

let loginEmailInput = React.createRef();
let loginPasswordInput = React.createRef();

function loginUser(auth) {
    if(loginEmailInput.current.value === '') {
        toast.error('Please enter your email address');
        return;
    }

    if(loginPasswordInput.current.value === '') {
        toast.error('Please enter the password');
        return;
    }

    auth.signin(loginEmailInput.current.value, loginPasswordInput.current.value);
}

const LoginModal = ({onClick}) => {
    const auth = useAuth();
    return (
        <div>
            <div className="color-1B1B1B mar-bottom-30 text-align-center font-size-15 text-uppercase">Log In</div>
            <div className="mar-bottom-30">
                <div className="pos-relative flex-col mar-bottom-20">
                    <input ref={loginEmailInput} placeholder="Email" className="box-shadow-1 width-100 border-none outline-none height-40px bgcolor-f6f6f6 bor-radius-4 font-size-1 hor-pad-12" type="email"/>
                    <div className="input__animation pos-absolute height-width-3 primary-background"></div>
                </div>
                <div className="pos-relative flex-col">
                    <input ref={loginPasswordInput} placeholder="Password" className="box-shadow-1 width-100 border-none outline-none height-40px bgcolor-f6f6f6 bor-radius-4 font-size-1 hor-pad-12" type="password"/>
                    <div className="input__animation pos-absolute height-width-3 primary-background"></div>
                </div>
            </div>
            <div className="flex-row justify-content-center">
                <div onClick={() => onClick()} className="primary-background width-150px flex-row align-items-center justify-content-center color-white bor-radius-30 translate-y-2 cursor-pointer mar-right-20">
                    <div className="orange-gradient-border-button width-100 flex-row justify-content-center color-1B1B1B bgcolor-white bor-radius-30">Register</div>
                </div>
                <div onClick={() => loginUser(auth)} className="primary-background translate-y-2 width-150px flex-row align-items-center justify-content-center ver-pad-8 color-white bor-radius-30 cursor-pointer">
                    <div>Submit</div>
                </div>
            </div>
        </div>
    );
}
 
export default LoginModal;