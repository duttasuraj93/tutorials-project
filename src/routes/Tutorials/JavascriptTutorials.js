import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';


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
                    <div className="wrapper-1200  ">
                        <div className="font-weight-6 font-size-3 line-height-12 color-1B1B1B mar-bottom-100 text-underline">Javascript</div>
                        <div className="flex-col">
                            <div className="tutorial__container pos-relative">
                                <div className="absput-me-fake-heading font-weight-6 font-size-3 color-07c4f1 pos-absolute z-index-neg">Fetch POST</div>
                                <div className="font-size-13 mar-bottom-15 color-07c4f1">Fetch POST Request</div>
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quidem reiciendis? Eveniet voluptatum soluta nemo expedita nihil voluptas molestias ab accusantium minus. Saepe, blanditiis deserunt rerum aspernatur alias error omnis.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default JavascriptTutorials;