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
                        <div className="font-size-12 mar-bottom-10 color-07c4f1">Lorem ipsum dolor sit.</div>
                        <div className="font-weight-6 font-size-3 line-height-12 color-1B1B1B mar-bottom-20">Lorem ipsum dolor sit amet.</div>
                        <div className="color-1B1B1B mar-bottom-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus magni ullam vero assumenda.</div>
                        <div class="orange-gradient flex-inline ver-pad-8 hor-pad-30 color-white bor-radius-30 cursor-pointer">Button</div>
                    </div>
                    <div className="width-48">
                        <img className="width-100" src="https://image.flaticon.com/icons/svg/1146/1146869.svg" alt=""/>
                    </div>
                </div>
            </div>


            <div>
                <div className="width-1200">

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