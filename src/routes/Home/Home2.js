import React, { Component } from 'react';
import FirebaseAuth, { MyContext, LoggedIn } from '../../auth';


class Home2 extends Component {
    // static contextType = LoggedIn;

    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <FirebaseAuth>
                    <LoggedIn.Consumer>
                        {(consumer) => {
                            console.log("before consumer");
                            console.log(consumer);
                            return (
                                <div>Im inside the consumer</div>
                            )
                        }}
                    </LoggedIn.Consumer>
                </FirebaseAuth>
            </div>
        );
    }
}
 
export default Home2;