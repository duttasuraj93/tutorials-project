import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './routes/Home/Home';
import JavascriptTotorials from './routes/Tutorials/JavascriptTutorials';


function App() {

    return ( 
        <Router>
            <React.Fragment>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/tutorials/javascript"><JavascriptTotorials /></Route>
            </React.Fragment>
        </Router>
    );
}
 
export default App;