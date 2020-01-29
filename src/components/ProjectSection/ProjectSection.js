import React from 'react';
import {Link} from 'react-router-dom';

const ProjectSection = () => {
    return (
        <div className="width-100 mobile-each__section flex-row justify-content-center mar-bottom-100">
            <div className="wrapper-1200 pos-relative">
                <div className="fake__heading font-weight-6 font-size-3 color-07c4f1 pos-absolute z-index-neg">PROJECTS</div>
                <div className="font-size-13 mar-bottom-15 color-07c4f1 mar-bottom-20">projects</div>
                <div className="flex-row justify-content-space-bet align-items-center flex-wrap-wrap">
                    <Link className="project-box translate-x-5-parent translate-y-2 width-30 box-shadow-3 bor-radius-4 ver-pad-30 hor-pad-30 cursor-pointer bgcolor-white mar-bottom-20" to={"/tutorials/javascript"}>
                        <div className="color-EA4F70 font-size-07 bgcolor-EA4F70-opacity flex-inline ver-pad-2 hor-pad-12 bor-radius-4 mar-bottom-20 text-uppercase">Tutorial</div>
                        <div className="color-1B1B1B font-size-15 font-weight-6 mar-bottom-15">Lorem ipsum dolor sit amet.</div>
                        <div className="color-1B1B1B mar-bottom-30">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores!</div>
                        <div className="color-f5af19 font-size-09 learn-more">Learn more<span className="mar-left-5 translate-x-5 flex-inline">&#8594;</span></div>
                    </Link>
                    <Link className="project-box translate-x-5-parent translate-y-2 width-30 box-shadow-3 bor-radius-4 ver-pad-30 hor-pad-30 cursor-pointer bgcolor-white mar-bottom-20" to={"/tutorials/javascript"}>
                        <div className="color-EA4F70 font-size-07 bgcolor-EA4F70-opacity flex-inline ver-pad-2 hor-pad-12 bor-radius-4 mar-bottom-20 text-uppercase">Tutorial</div>
                        <div className="color-1B1B1B font-size-15 font-weight-6 mar-bottom-15">Lorem ipsum dolor sit amet.</div>
                        <div className="color-1B1B1B mar-bottom-30">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores!</div>
                        <div className="color-f5af19 font-size-09 learn-more">Learn more<span className="mar-left-5 translate-x-5 flex-inline">&#8594;</span></div>
                    </Link>
                    <Link className="project-box translate-x-5-parent translate-y-2 width-30 box-shadow-3 bor-radius-4 ver-pad-30 hor-pad-30 cursor-pointer bgcolor-white mar-bottom-20" to={"/tutorials/javascript"}>
                        <div className="color-EA4F70 font-size-07 bgcolor-EA4F70-opacity flex-inline ver-pad-2 hor-pad-12 bor-radius-4 mar-bottom-20 text-uppercase">Tutorial</div>
                        <div className="color-1B1B1B font-size-15 font-weight-6 mar-bottom-15">Lorem ipsum dolor sit amet.</div>
                        <div className="color-1B1B1B mar-bottom-30">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores!</div>
                        <div className="color-f5af19 font-size-09 learn-more">Learn more<span className="mar-left-5 translate-x-5 flex-inline">&#8594;</span></div>
                    </Link>
                    <Link className="project-box translate-x-5-parent translate-y-2 width-30 box-shadow-3 bor-radius-4 ver-pad-30 hor-pad-30 cursor-pointer bgcolor-white mar-bottom-20" to={"/tutorials/javascript"}>
                        <div className="color-07c4f1 font-size-07 bgcolor-07c4f1-opacity flex-inline ver-pad-2 hor-pad-12 bor-radius-4 mar-bottom-20 text-uppercase">Project</div>
                        <div className="color-1B1B1B font-size-15 font-weight-6 mar-bottom-15">Lorem ipsum dolor sit amet.</div>
                        <div className="color-1B1B1B mar-bottom-30">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores!</div>
                        <div className="color-f5af19 font-size-09 learn-more">Learn more<span className="mar-left-5 translate-x-5 flex-inline">&#8594;</span></div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection;