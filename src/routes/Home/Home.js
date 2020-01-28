import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import StartingSection from '../../components/StartingSection/StartingSection';
import AboutMe from '../../components/AboutMe/AboutMe';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import Footer from '../../components/Footer/Footer';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() { 
        
    
        return ( 
            <div>
                <Navbar />

                <StartingSection />
    
                <AboutMe />

                <ProjectSection />
    
                <ContactSection />

                <Footer />
            </div>
        );
    }
}
 
export default Home;
