import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Slide from 'react-reveal/Slide';
import Typist from 'react-typist';
class JavascriptTutorials extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Navbar />
                <div className="width-100 flex-row justify-content-center mar-bottom-100">
                    <div className="wrapper-1200">
                        <Typist cursor={{hideWhenDone: true}} className="font-weight-6 font-size-3 line-height-12 color-1B1B1B mar-bottom-50">
                            Javascript
                        </Typist>
                        <div className="flex-col">
                            <Slide bottom>
                                <div className="tutorial__container width-30 box-shadow-3 bor-radius-4 ver-pad-30 hor-pad-30 bgcolor-white mar-bottom-20 width-100">
                                    <div className="font-size-13 mar-bottom-15 color-07c4f1">Fetch POST Request</div>
                                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quidem reiciendis? Eveniet voluptatum soluta nemo expedita nihil voluptas molestias ab accusantium minus. Saepe, blanditiis deserunt rerum aspernatur alias error omnis.</div>
                                </div>
                            </Slide>
                            <Slide bottom>
                                <div className="tutorial__container translate-y-2 width-30 box-shadow-3 bor-radius-4 ver-pad-30 hor-pad-30 bgcolor-white mar-bottom-20 width-100">
                                    <div className="font-size-13 mar-bottom-15 color-07c4f1">Fetch POST Request</div>
                                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quidem reiciendis? Eveniet voluptatum soluta nemo expedita nihil voluptas molestias ab accusantium minus. Saepe, blanditiis deserunt rerum aspernatur alias error omnis.</div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default JavascriptTutorials;