import React from 'react';
import { useAuth } from "../../../auth";
import toast from '../../../config/toast';

let registerEmailInput = React.createRef();
let registerPasswordInput = React.createRef();


function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function registerUser(auth) {

    if(registerEmailInput.current.value === '') {
        toast.error('Please enter an email address');
        return;
    }

    if(registerEmailInput.current.value !== '') {
        var validEmail = validateEmail(registerEmailInput.current.value);
        if(!validEmail) {
            toast.error('Please enter a valid Email');
            return;
        }
    }

    if(registerPasswordInput.current.value === '') {
        toast.error('Please enter a password');
        return;
    }

    auth.signup(registerEmailInput.current.value, registerPasswordInput.current.value);
    
}

const RegisterModal = () => {
    const auth = useAuth();
    return (
        <div>
            <div className="color-1B1B1B mar-bottom-30 text-align-center font-size-15 text-uppercase">Register</div>
            <div className="mar-bottom-30">
                <div className="pos-relative flex-col mar-bottom-20">
                    <input ref={registerEmailInput} placeholder="Email" className="box-shadow-1 width-100 border-none outline-none height-40px bgcolor-f6f6f6 bor-radius-4 font-size-1 hor-pad-12" type="email"/>
                    <div className="input__animation pos-absolute height-width-3 primary-background"></div>
                </div>
                <div className="pos-relative flex-col">
                    <input ref={registerPasswordInput} placeholder="Password" className="box-shadow-1 width-100 border-none outline-none height-40px bgcolor-f6f6f6 bor-radius-4 font-size-1 hor-pad-12" type="password"/>
                    <div className="input__animation pos-absolute height-width-3 primary-background"></div>
                </div>
            </div>
            <div onClick={() => registerUser(auth)} className="flex-row justify-content-center">
                <div className="primary-background translate-y-2 width-150px flex-row align-items-center justify-content-center ver-pad-8 color-white bor-radius-30 cursor-pointer">
                    <div>Submit</div>
                </div>
            </div>
        </div>
    )
}

export default RegisterModal;