import React from 'react';
import Typist from 'react-typist';
// import Zoom from 'react-reveal/Zoom';

const StartingSection = () => {
    return (
        <div className="width-100 mobile-starting-section mobile-each__section flex-row justify-content-center mar-bottom-100">
            <div className="wrapper-1200 mobile-resp__wrap flex-row justify-content-space-bet align-items-center">
                <div className="width-48">
                    <Typist cursor={{hideWhenDone: true}} className="font-size-13 mar-bottom-15 color-07c4f1">
                        <span>Lorem ipsum dolor sit.</span>
                        <Typist.Backspace count={22} delay={200} />
                        <span>Lorem ipsum dolor sit</span>
                    </Typist>
                    <div className="font-weight-6 font-size-3 line-height-12 color-1B1B1B mar-bottom-20">Lorem ipsum dolor sit amet.</div>
                    <div className="color-1B1B1B mar-bottom-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus magni ullam vero assumenda.</div>
                    <div className="primary-background translate-y-2 width-150px flex-row align-items-center justify-content-center ver-pad-8 color-white bor-radius-30 cursor-pointer mar-right-20">Get started</div>
                </div>
                <div className="width-48 homepage__banner-container pos-relative">
                    {/* <Zoom ssrFadeout>
                        <img className="width-100 homepage__banner-image" src={require('../../assets/images/sunshine.svg')} alt=""/>
                    </Zoom> */}
                    <img className="width-100 homepage__banner-image" src={require('../../assets/images/sunshine.svg')} alt=""/>
                </div>
            </div>
        </div>
    );
}
 
export default StartingSection;