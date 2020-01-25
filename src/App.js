import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './routes/Home/Home2';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <Router>
                <React.Fragment>
                    <Route exact path="/"><Home /></Route>
                </React.Fragment>
            </Router>
        );
    }
}
 
export default App;