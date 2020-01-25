import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './routes/Home/Home';


function App() {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }

    const [firebaseInitialized, setFirebaseInitialized] = useState(false);
    
    return ( 
        <Router>
            <React.Fragment>
                <Route exact path="/"><Home /></Route>
            </React.Fragment>
        </Router>
    );
}
 
export default App;