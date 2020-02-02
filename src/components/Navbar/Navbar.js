import React from 'react';
import { useAuth } from "../../auth";
import NonLoggedIn from './NonLoggedIn/NonLoggedIn';
import LoggedIn from './LoggedIn/LoggedIn';


function Navbar(props) {

    const auth = useAuth();

    return (
        <div className="navbar flex-row justify-content-center height-100px ">
            <div className="navbar__wrapper wrapper-1200 flex-row align-items-center justify-content-space-bet">
                <div className="flex-row">
                    <div className="navbar__site-name mar-right-50">
                        <div className="font-size-15 font-weight-6 cursor-pointer color-07c4f1">Daydream</div>
                    </div>
                    <div className="navbar__options flex-row align-items-center">
                        <div className="mar-right-50 color-f5af19 nav-item translate-y-2 font-size-1 cursor-pointer">About</div>
                        <div className="mar-right-50 color-f5af19 nav-item translate-y-2 font-size-1 cursor-pointer">Projects</div>
                        <div className="color-f5af19 nav-item translate-y-2 font-size-1 cursor-pointer">Contact</div>
                    </div>
                </div>
                <div className="navbar__signup-button-container flex-row justify-content-end">
                    {
                        auth.user ? (
                            <LoggedIn />
                        ) : (
                            <NonLoggedIn />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;