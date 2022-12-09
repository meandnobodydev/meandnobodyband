import React, {useRef} from "react";
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7mzzfdd', 'template_mqi9vrf', form.current, 'RFXJgjiNicTEPS3qQ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return (
        <div id="contact-section">
            <div id="contact-section-left">
                <div id="inner-left">
                <h1 id="contact-logo">ME + NOBODY</h1>
                <h2 className="contact-content">ALL INQUIRIES</h2>
                <h3 id="contact-email">EMAIL:<br></br> MEANDNOBODYBAND@GMAIL.COM</h3>
                </div>
            </div>
            <div id="contact-section-right">
                <h2 className="contact-content">SIGN UP FOR UPDATES</h2>
                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                    <input type="email" placeholder="YOUR EMAIL" id="email-input" name="user_email" required></input>
                    <br></br>
                    <button className="btn">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
