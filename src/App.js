import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './routes/Home/Home';
import ClipPathBox from './routes/ClipPathBox/ClipPathBox';
import { ProvideAuth } from './auth';


function App() {

    return ( 
        <ProvideAuth>
            <Router>
                <React.Fragment>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/clip-path-box"><ClipPathBox /></Route>
                </React.Fragment>
            </Router>
        </ProvideAuth>
        
    );
}
 
export default App;