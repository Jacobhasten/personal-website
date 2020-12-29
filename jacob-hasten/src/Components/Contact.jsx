import React, { useState ,useEffect } from "react";
import GlobalNav from "./GlobalNav";
import emailjs from "emailjs-com";

function Contact() {


    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_a9mwbgw', 'template_msbi0rq', e.target, 'user_WBt7nay4rEp6Cev7pJkOD')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          
      }

    return(
<div className="contact-container">
    <GlobalNav/>
    <div className="page-title-container">
                <h1 className="page-title">Contact</h1>
    </div>
    <div className="contact-form-container">
        <form onSubmit={sendEmail} className="contact-form">
     
      <input type="text" name="name" placeholder="Name"/>
      <input type="text" name="subject" placeholder="subject"/>
    
      
      <input type="email" name="email" placeholder="Email"/>
      
      <textarea name="message" placeholder="Message"/>
      <input type="submit" value="Send" />
        </form>

    </div>

</div>
    )
}

export default Contact;