import React, { Component } from 'react';
import toast from '../../../config/toast';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            email: '',
            message: '',
        }
    }

    handleContactFormName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleContactFormEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    handleContactFormMessage = (event) => {
        this.setState({
            message: event.target.value
        });
    }

    handleContactFormSubmit = (event) => {
        event.preventDefault();
        toast.success('Email successfully sent. I will get back to you as soon as possible');
        // console.log(this.state.name);
        // console.log(this.state.email);
        // console.log(this.state.message);
    }


    render() { 
        return ( 
            <form onSubmit={(e) => this.handleContactFormSubmit(e)}>
                <div className="pos-relative flex-col mar-bottom-20">
                    <div className="color-1B1B1B mar-bottom-10">Name</div>
                    <input required onChange={(e) => this.handleContactFormName(e)} className="contact-form-input box-shadow-1 width-100 border-none outline-none height-40px bgcolor-f6f6f6 font-size-1 bor-radius-4 hor-pad-12" type="text"/>
                    <div className="input__animation pos-absolute height-width-3 orange-gradient"></div>
                </div>
                <div className="pos-relative flex-col mar-bottom-20">
                    <div className="color-1B1B1B mar-bottom-10">Email Address</div>
                    <input required onChange={(e) => this.handleContactFormEmail(e)} className="contact-form-input box-shadow-1 width-100 border-none outline-none height-40px bgcolor-f6f6f6 font-size-1 bor-radius-4 hor-pad-12" type="email"/>
                    <div className="input__animation pos-absolute height-width-3 orange-gradient"></div>
                </div>
                <div className="pos-relative flex-col mar-bottom-20">
                    <div className="color-1B1B1B mar-bottom-10">Message</div>
                    <textarea required onChange={(e) => this.handleContactFormMessage(e)} className="contact-form-input box-shadow-1 width-100 border-none outline-none height-40px bgcolor-f6f6f6 font-size-1 bor-radius-4 height-150px hor-pad-12 ver-pad-12 resize-none" type="text"/>
                    <div className="input__animation pos-absolute height-width-3 orange-gradient"></div>
                </div>
                <div className="flex-row align-items-center justify-content-space-bet">
                    <div className="flex-row align-items-center">
                        <input checked readOnly className="mar-right-10" type="checkbox" name="" id=""/>
                        <div className="font-size-09 color-07c4f1">Accept <span className="text-underline cursor-pointer">terms & conditions</span></div>
                    </div>
                    <button type="submit" value="Submit" className="orange-gradient translate-x-5-parent width-150px flex-row align-items-center justify-content-center translate-y-2 ver-pad-8 color-white bor-radius-30 cursor-pointer box-shadow-2">Send <span className="mar-left-5 translate-x-5">&#8594;</span></button>
                </div>
            </form>
        );
    }
}
 
export default ContactForm;