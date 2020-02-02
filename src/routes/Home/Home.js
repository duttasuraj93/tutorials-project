import React, { Component } from 'react';
// import Slide from 'react-reveal/Slide';
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

    // PORT=3001 npm start

    // componentDidMount() {
    //     fetch('/users').then(res => res.json()).then(res => {
    //         console.log(res);
    //     })
    // }


    render() { 
        
    
        return ( 
            <div>
                <Navbar />

                <StartingSection />
                
                {/* <Slide bottom ssrFadeout>
                    <AboutMe />
                    <ProjectSection />
                    <ContactSection />
                </Slide> */}

                <AboutMe />
                <ProjectSection />
                <ContactSection />

                <Footer />

            </div>
        );
    }
}
 
export default Home;
