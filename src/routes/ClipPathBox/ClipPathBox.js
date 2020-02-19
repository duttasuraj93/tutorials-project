import React from 'react';
import Navbar from '../../components/Navbar/Navbar';


const ClipPathBox = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="width-100 mobile-each__section flex-row justify-content-center mar-bottom-100">
                <div className="wrapper-1200 pos-relative">
                    <div className="fake__heading font-weight-6 font-size-3 color-07c4f1 pos-absolute z-index-neg">CLIP PATH</div>
                    <h1 className="font-size-13 mar-bottom-15 color-07c4f1 mar-bottom-20">clip path</h1>
                    <div className="flex-row justify-content-space-bet align-items-center flex-wrap-wrap">
                        {/* <div className="project-box translate-x-5-parent translate-y-2 width-30 box-shadow-3 bor-radius-30 cursor-pointer bgcolor-white mar-bottom-20 pos-relative">
                            <div className="orange-gradient-2 color-white hidden-box ver-pad-30 hor-pad-30 bor-radius-30">
                                <div className="show-i">i</div>
                                <div className="show-rest">
                                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aperiam?</div>
                                    <div>Lorem ipsum dolor sit amet.</div>
                                </div>
                            </div>
                            <div className="another-box ver-pad-30 hor-pad-30">
                                <h2 className="color-1B1B1B font-size-15 font-weight-6 mar-bottom-15">Clip Path Box</h2>
                                <p className="color-1B1B1B mar-bottom-30">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores!</p>
                                <span className="color-f5af19 font-size-09 learn-more">Learn more<span className="mar-left-5 translate-x-5 flex-inline">&#8594;</span></span>
                            </div>
                        </div> */}
                        {/* <div className="width-30">
                            <div className="orange-gradient-2 color-white hidden-box ver-pad-30 hor-pad-30 bor-radius-30">
                                <div className="show-i">i</div>
                                <div className="show-rest">
                                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aperiam?</div>
                                    <div>Lorem ipsum dolor sit amet.</div>
                                </div>
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vitae asperiores aspernatur laboriosam quam minus velit iusto provident veritatis ratione!
                            </div>
                        </div>
                        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, commodi.</div> */}

                        <div style={{height: "200px"}} className="width-30 orange-gradient-2 bor-radius-30">
                            <div className="bgcolor-1B1B1B color-white">i</div>
                            <div className="color-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, eaque!</div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default ClipPathBox;