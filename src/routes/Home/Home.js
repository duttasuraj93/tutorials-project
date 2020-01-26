import React from 'react';
import FirebaseAuth, { MyContext, LoggedIn } from '../../auth';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return ( 
        // <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum molestias accusamus explicabo numquam possimus. Perspiciatis tenetur labore dicta nam explicabo?</div>
        <div>
            <Navbar />
            <div className="width-100 flex-row justify-content-center">
                <div className="wrapper-1200 flex-row justify-content-space-bet align-items-center">
                    <div className="width-48">
                        <div className="font-size-13 mar-bottom-15 color-07c4f1">Lorem ipsum dolor sit.</div>
                        <div className="font-weight-6 font-size-3 line-height-12 color-1B1B1B mar-bottom-20">Lorem ipsum dolor sit amet.</div>
                        <div className="color-1B1B1B mar-bottom-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus magni ullam vero assumenda.</div>
                        <div class="orange-gradient width-150px flex-row align-items-center justify-content-center ver-pad-8 color-white bor-radius-30 cursor-pointer mar-right-20">Button</div>
                    </div>
                    <div className="width-48">
                        <img className="width-100" src="https://image.flaticon.com/icons/svg/1146/1146869.svg" alt=""/>
                    </div>
                </div>
            </div>


            <div className="width-100 flex-row justify-content-center">
                <div className="wrapper-1200 flex-row justify-content-space-bet align-items-center">
                    <div className="width-48 pos-relative">
                        <div className="absput-me-fake-heading font-weight-6 font-size-3 color-07c4f1 pos-absolute z-index-neg">ABOUT</div>
                        <div className="font-size-13 mar-bottom-15 color-07c4f1">about me</div>
                        <div className="color-1B1B1B mar-bottom-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sint, dolores atque esse aspernatur voluptates enim nemo, tenetur ratione necessitatibus iste, maxime similique iusto ad libero provident aliquid hic quam.</div>
                        <div className="color-1B1B1B mar-bottom-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor veritatis ducimus tempore, libero temporibus porro?</div>
                        <div className="flex-row align-items-center">
                            <div class="orange-gradient width-150px flex-row align-items-center justify-content-center ver-pad-8 color-white bor-radius-30 cursor-pointer mar-right-20">Introduction</div>
                            <div class="orange-gradient width-150px flex-row align-items-center justify-content-center color-white bor-radius-30 cursor-pointer">
                                <div className="orange-gradient-border-button width-100 flex-row justify-content-center color-1B1B1B bgcolor-white bor-radius-30">Learn More</div>
                            </div>
                        </div>
                    </div>
                    <div className="width-48">
                        <div>
                            <div className="main-cat-cont flex-row align-items-center justify-content-center height-150px width-150px bor-radius-full bor-2px-f5af19 pos-relative">
                                <div className="text-align-center color-1B1B1B">Frontend Development</div>
                                <div className="pos-absolute hidden-cats flex-row align-items-center justify-content-center orange-gradient-2">
                                    <img className="hidden-cat-image" src="https://image.flaticon.com/icons/svg/1383/1383397.svg" alt=""/>
                                </div>
                            </div>
                            <div className="main-cat-cont flex-row align-items-center justify-content-center height-150px width-150px bor-radius-full bor-2px-4286f4 pos-relative">
                                <div className="text-align-center color-1B1B1B">Backend Development</div>
                                <div className="pos-absolute hidden-cats flex-row align-items-center justify-content-center dark-ocean-gradient">
                                    <img className="hidden-cat-image" src="https://image.flaticon.com/icons/svg/1383/1383397.svg" alt=""/>
                                </div>
                            </div>
                            <div className="main-cat-cont flex-row align-items-center justify-content-center height-150px width-150px bor-radius-full bor-2px-FF0099 pos-relative">
                                <div className="text-align-center color-1B1B1B">UI/UX Sense</div>
                                <div className="pos-absolute hidden-cats flex-row align-items-center justify-content-center yoda-gradient">
                                    <img className="hidden-cat-image" src="https://image.flaticon.com/icons/svg/1383/1383397.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <FirebaseAuth>
                <LoggedIn.Consumer>
                    {(consumer) => {
                        console.log("before consumer");
                        console.log(consumer);
                        if(consumer) {
                            return (
                                <div>Im logged in</div>
                            )
                        } else {
                            return (
                                <div>Im not logged in</div>
                            )
                        }
                        
                    }}
                </LoggedIn.Consumer>
            </FirebaseAuth>
        </div>
    );
}
 
export default Home;