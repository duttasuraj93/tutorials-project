import React from 'react';
import { useAuth } from "../../../auth";

function signOutUser(auth) {
    auth.signout();
}

const LoggedIn = () => {
    const auth = useAuth();
    return (
        <div className="pos-relative">
            <div className="flex-row align-items-center">
                <img src={require('../../../assets/images/panda.svg')} alt="" className="bgcolor-1B1B1B height-width-50 bor-radius-full box-shadow-white bor-2px-f5af19 mar-right-10 object-fit-cover"/>
                <div className="pos-relative">
                    <div className="navbar__dropdown-icon-container width-40px ver-pad-20 flex-row justify-content-center align-items-center cursor-pointer">
                        <img className="height-10px object-fit-cover" src={require('../../../assets/images/down-arrow-orange.svg')} alt=""/>
                    </div>
                    <div className="navbar__dropdown bgcolor-07c4f1 pos-absolute width-200px">
                        <div className="color-white ver-pad-8 cursor-pointer translate-y-2">Profile</div>
                        <div className="color-white ver-pad-8 cursor-pointer translate-y-2">About</div>
                        <div className="color-white ver-pad-8 cursor-pointer translate-y-2">Projects</div>
                        <div className="color-white ver-pad-8 cursor-pointer translate-y-2">Contact</div>
                        <div onClick={() => signOutUser(auth)} className="color-white ver-pad-8 cursor-pointer translate-y-2">Sign Out</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default LoggedIn;