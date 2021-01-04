import React, { useState } from "react";
import GlobalNav from "./GlobalNav";
import emailjs from "emailjs-com";

function Contact() {

    const [formSubmitted, setFormSubmitted] = useState(false)

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_a9mwbgw', 'template_msbi0rq', e.target, 'user_WBt7nay4rEp6Cev7pJkOD')
            .then((result) => {
                setFormSubmitted(true)
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });


    }



    return (
        <div className="contact-container">
            <GlobalNav />
            <div className="page-title-container">
                <h1 className="page-title">Contact</h1>
            </div>

            {formSubmitted ? (<div className="contact-form-container">
                <h6 className="contact-form-submission-text">Thank you for getting in touch with me! I will get back to you shortly.</h6>
                <button className="contact-form-refresh-button" onClick={() => setFormSubmitted(false)}>Refresh Form</button>
            </div>
            ) : (<div className="contact-form-container">
                <form onSubmit={sendEmail} className="contact-form">
                    <div className="contact-form-container-input">
                        <input className="contact-form-input contact-form-input-name" type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="contact-form-container-input">
                        <input className="contact-form-input contact-form-input-subject" type="text" name="subject" placeholder="Subject" />
                    </div>
                    <div className="contact-form-container-input">
                        <input className="contact-form-input contact-form-input-email" type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="contact-form-container-input">
                        <textarea rows="10" className="contact-form-input contact-form-input-textarea" name="message" placeholder="Message" />
                    </div>
                    <div className="contact-form-container-input">
                        <input className="contact-form-input contact-form-input-send" type="submit" value="Send" />
                    </div>
                </form>
            </div>)

            }


        </div>
    )
}

export default Contact;