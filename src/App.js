import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './routes/Home/Home';
import { ProvideAuth } from './auth';


function App() {

    return ( 
        <ProvideAuth>
            <Router>
                <React.Fragment>
                    <Route exact path="/"><Home /></Route>
                </React.Fragment>
            </Router>
        </ProvideAuth>
        
    );
}
 
export default App;