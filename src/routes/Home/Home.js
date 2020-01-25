import React from 'react';
import FirebaseAuth, { MyContext, LoggedIn } from '../../auth';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return ( 
        // <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum molestias accusamus explicabo numquam possimus. Perspiciatis tenetur labore dicta nam explicabo?</div>
        <div>
            <Navbar />
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