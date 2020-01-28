import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';


const Home = () => {

    return ( 
        <div>
            <Navbar />

            <div className="width-100 mobile-each__section flex-row justify-content-center mar-bottom-100">
                <div className="wrapper-1200 mobile-resp__wrap flex-row justify-content-space-bet align-items-center">
                    <div className="width-48">
                        <div className="font-size-13 mar-bottom-15 color-07c4f1">Lorem ipsum dolor sit.</div>
                        <div className="font-weight-6 font-size-3 line-height-12 color-1B1B1B mar-bottom-20">Lorem ipsum dolor sit amet.</div>
                        <div className="color-1B1B1B mar-bottom-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus magni ullam vero assumenda.</div>
                        <div className="orange-gradient translate-y-2 width-150px flex-row align-items-center justify-content-center ver-pad-8 color-white bor-radius-30 cursor-pointer mar-right-20">Button</div>
                    </div>
                    <div className="width-48 homepage__banner-container pos-relative">
                        <img className="width-100 homepage__banner-image" src={require('../../assets/images/sunshine.svg')} alt=""/>
                    </div>
                </div>
            </div>


            <div className="width-100 mobile-each__section flex-row justify-content-center mar-bottom-100">
                <div className="wrapper-1200 mobile-resp__wrap flex-row justify-content-space-bet align-items-center">
                    <div className="width-48 pos-relative">
                        <div className="fake__heading font-weight-6 font-size-3 color-07c4f1 pos-absolute z-index-neg">ABOUT</div>
                        <div className="font-size-13 mar-bottom-15 color-07c4f1">about me</div>
                        <div className="color-1B1B1B mar-bottom-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sint, dolores atque esse aspernatur voluptates enim nemo, tenetur ratione necessitatibus iste, maxime similique iusto ad libero provident aliquid hic quam.</div>
                        <div className="color-1B1B1B mar-bottom-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor veritatis ducimus tempore, libero temporibus porro?</div>
                        <div className="about__wrapper-buttons flex-row align-items-center">
                            <div className="orange-gradient width-150px flex-row align-items-center justify-content-center ver-pad-8 color-white bor-radius-30 cursor-pointer translate-y-2 mar-right-20">Introduction</div>
                            <div className="orange-gradient width-150px flex-row align-items-center justify-content-center color-white bor-radius-30 translate-y-2 cursor-pointer">
                                <div className="orange-gradient-border-button width-100 flex-row justify-content-center color-1B1B1B bgcolor-white bor-radius-30">Learn More</div>
                            </div>
                        </div>
                    </div>
                    <div className="width-48 flex-row flex-wrap-wrap justify-content-evenly">
                        {/* <div className="width-34 flex-row justify-content-end">
                            <div className="main-cat-cont flex-row align-items-center justify-content-center height-150px width-150px bor-radius-full bor-2px-f5af19 pos-relative">
                                <div className="text-align-center color-1B1B1B">Frontend Development</div>
                                <div className="pos-absolute hidden-cats flex-row align-items-center justify-content-center orange-gradient">
                                    <img className="hidden-cat-image" src="https://image.flaticon.com/icons/svg/1383/1383397.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="width-34">
                            <div className="main-cat-cont flex-row align-items-center justify-content-center height-150px width-150px bor-radius-full bor-2px-4286f4 pos-relative">
                                <div className="text-align-center color-1B1B1B">Backend Development</div>
                                <div className="pos-absolute hidden-cats flex-row align-items-center justify-content-center">
                                    <img className="hidden-cat-image" src="https://image.flaticon.com/icons/svg/1383/1383397.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="width-34 flex-row justify-content-center">
                            <div className="main-cat-cont flex-row align-items-center justify-content-center height-150px width-150px bor-radius-full bor-2px-FF0099 pos-relative">
                                <div className="text-align-center color-1B1B1B">UI/UX Sense</div>
                                <div className="pos-absolute hidden-cats flex-row align-items-center justify-content-center yoda-gradient">
                                    <img className="hidden-cat-image" src="https://image.flaticon.com/icons/svg/1383/1383397.svg" alt=""/>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>


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
                            <div className="color-07c4f1 font-size-07 bgcolor-07c4f1-opacity flex-inline ver-pad-2 hor-pad-12 bor-radius-4 mar-bottom-20 text-uppercase">Project</div>
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


            <div className="width-100 mobile-each__section flex-row justify-content-center mar-bottom-100">
                <div className="wrapper-1200 mobile-resp__wrap flex-row justify-content-space-bet align-items-center">
                    <div className="width-48 pos-relative align-self-start">
                        <div className="fake__heading font-weight-6 font-size-3 color-07c4f1 pos-absolute z-index-neg">CONTACT</div>
                        <div className="font-size-13 mar-bottom-15 color-07c4f1">contact me</div>
                        <div className="font-weight-6 font-size-3 line-height-12 color-1B1B1B mar-bottom-20">Let's talk about everything.</div>
                        <div className="color-1B1B1B mar-bottom-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sint, dolores atque esse aspernatur voluptates enim.</div>
                        <div>Powered by<span className="mar-left-5"> <img className="height-15px" src={require('../../assets/images/sendgrid.svg')} alt=""/></span></div>
                    </div>
                    <div className="width-48">
                        <form action="">
                            <div className="pos-relative flex-col mar-bottom-20">
                                <div className="color-1B1B1B mar-bottom-10">Full name</div>
                                <input className="contact-form-input box-shadow-1 width-100 border-none outline-none height-40px bgcolor-f6f6f6 font-size-1 bor-radius-4 hor-pad-12" type="text"/>
                                <div className="input__animation pos-absolute height-width-3 orange-gradient"></div>
                            </div>
                            <div className="pos-relative flex-col mar-bottom-20">
                                <div className="color-1B1B1B mar-bottom-10">Email Address</div>
                                <input className="contact-form-input box-shadow-1 width-100 border-none outline-none height-40px bgcolor-f6f6f6 font-size-1 bor-radius-4 hor-pad-12" type="email"/>
                                <div className="input__animation pos-absolute height-width-3 orange-gradient"></div>
                            </div>
                            <div className="pos-relative flex-col mar-bottom-20">
                                <div className="color-1B1B1B mar-bottom-10">Message</div>
                                <textarea className="contact-form-input box-shadow-1 width-100 border-none outline-none height-40px bgcolor-f6f6f6 font-size-1 bor-radius-4 height-150px hor-pad-12 ver-pad-12 resize-none" type="text"/>
                                <div className="input__animation pos-absolute height-width-3 orange-gradient"></div>
                            </div>
                            <div className="flex-row align-items-center justify-content-space-bet">
                                <div className="flex-row align-items-center">
                                    <input className="mar-right-10" type="checkbox" name="" id=""/>
                                    <div className="font-size-09 color-07c4f1">Accept <span className="text-underline cursor-pointer">terms & conditions</span></div>
                                </div>
                                <div className="orange-gradient translate-x-5-parent width-150px flex-row align-items-center justify-content-center translate-y-2 ver-pad-8 color-white bor-radius-30 cursor-pointer box-shadow-2">Send <span className="mar-left-5 translate-x-5">&#8594;</span></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


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


        </div>
    );
}
 
export default Home;