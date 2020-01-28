import React from 'react';

const Footer = () => {
    return (
        <div className="width-100 flex-row justify-content-center bgcolor-1B1B1B ver-pad-20">
            <div className="wrapper-1200 mobile-resp__wrap flex-row justify-content-space-bet align-items-center">
                <div className="color-white font-size-09">&#9400; 2020 All rights reserved.</div>
                <div className="flex-row align-items-center">
                    <div className="height-width-40 flex-row justify-content-center align-items-center orange-gradient-2 bor-radius-full cursor-pointer box-shadow-2 translate-y-2 mar-right-20">
                        <img className="height-20px" src={require('../../assets/images/footer/facebook.svg')} alt=""/>
                    </div>
                    <div className="height-width-40 flex-row justify-content-center align-items-center orange-gradient-2 bor-radius-full cursor-pointer box-shadow-2 translate-y-2 mar-right-20">
                        <img className="height-20px" src={require('../../assets/images/footer/instagram.svg')} alt=""/>
                    </div>
                    <div className="height-width-40 flex-row justify-content-center align-items-center orange-gradient-2 bor-radius-full cursor-pointer box-shadow-2 translate-y-2 mar-right-20">
                        <img className="height-20px" src={require('../../assets/images/footer/linkedin.svg')} alt=""/>
                    </div>
                    <div className="height-width-40 flex-row justify-content-center align-items-center orange-gradient-2 bor-radius-full cursor-pointer box-shadow-2 translate-y-2 mar-right-20">
                        <img className="height-20px" src={require('../../assets/images/footer/github.svg')} alt=""/>
                    </div>
                    <div className="height-width-40 flex-row justify-content-center align-items-center orange-gradient-2 bor-radius-full cursor-pointer box-shadow-2 translate-y-2">
                        <img className="height-20px" src={require('../../assets/images/footer/twitter.svg')} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;