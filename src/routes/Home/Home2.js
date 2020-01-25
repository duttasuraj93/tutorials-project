import React, { Component } from 'react';
import FirebaseAuth, { MyContext } from '../../auth';


class Home2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <FirebaseAuth>
                    <MyContext.Consumer>
                        {(consumer) => {
                            console.log(consumer);
                            return (
                                <div>Im inside the consumer</div>
                            )
                        }}
                    </MyContext.Consumer>
                </FirebaseAuth>
            </div>
        );
    }
}
 
export default Home2;