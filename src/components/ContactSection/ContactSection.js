import React from 'react';
import ContactForm from './ContactForm/ContactForm';

const ContactSection = () => {
    return (
        <div className="width-100 mobile-each__section flex-row justify-content-center mar-bottom-100">
            <div className="wrapper-1200 mobile-resp__wrap flex-row justify-content-space-bet align-items-center">
                <div className="width-48 pos-relative align-self-start">
                    <div className="fake__heading font-weight-6 font-size-3 color-07c4f1 pos-absolute z-index-neg">CONTACT</div>
                    <div className="font-size-13 mar-bottom-15 color-07c4f1">contact me</div>
                    <div className="font-weight-6 font-size-3 line-height-12 color-1B1B1B mar-bottom-20">Let's talk about everything.</div>
                    <div className="color-1B1B1B mar-bottom-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sint, dolores atque esse aspernatur voluptates enim.</div>
                    <div>Powered by<span className="mar-left-5"> <img className="height-15px" src={require('../../assets/images/sendgrid.svg')} alt=""/></span></div>
                </div>
                <div className="width-48">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
 
export default ContactSection;