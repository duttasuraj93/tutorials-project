import React from 'react';

const AboutMe = () => {
    return ( 
        <div className="width-100 mobile-each__section flex-row justify-content-center mar-bottom-100">
            <div className="wrapper-1200 mobile-resp__wrap flex-row justify-content-space-bet align-items-center">
                <div className="width-48 pos-relative">
                    <div className="fake__heading font-weight-6 font-size-3 color-07c4f1 pos-absolute z-index-neg">ABOUT</div>
                    <div className="font-size-13 mar-bottom-15 color-07c4f1">about me</div>
                    <div className="color-1B1B1B mar-bottom-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sint, dolores atque esse aspernatur voluptates enim nemo, tenetur ratione necessitatibus iste, maxime similique iusto ad libero provident aliquid hic quam.</div>
                    <div className="color-1B1B1B mar-bottom-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor veritatis ducimus tempore, libero temporibus porro?</div>
                    <div className="about__wrapper-buttons flex-row align-items-center">
                        <div className="primary-background width-150px flex-row align-items-center justify-content-center ver-pad-8 color-white bor-radius-30 cursor-pointer translate-y-2 mar-right-20">Introduction</div>
                        <div className="primary-background width-150px flex-row align-items-center justify-content-center color-white bor-radius-30 translate-y-2 cursor-pointer">
                            <div className="orange-gradient-border-button width-100 flex-row justify-content-center color-1B1B1B bgcolor-white bor-radius-30">Learn More</div>
                        </div>
                    </div>
                </div>
                <div className="width-48 pos-relative">
                    
                    {/* <img className="blue-gear pos-relative height-200px" src={require('../../assets/images/blue-gear.svg')} alt=""/>
                    <img className="red-gear pos-relative height-120px" src={require('../../assets/images/red-gear.svg')} alt=""/>
                    <img className="green-gear pos-relative height-120px" src={require('../../assets/images/green-gear.svg')} alt=""/> */}


                </div>
            </div>
        </div>
    );
}
 
export default AboutMe;