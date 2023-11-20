import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

function Contact() {

    const [modalOpen, setModalOpen] = useState();
    const form = useRef();

    function openModal() {
        setModalOpen(true);
    }

    function closeModal() {
        setModalOpen(false);
    }
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7mzzfdd', 'template_mqi9vrf', form.current, 'RFXJgjiNicTEPS3qQ')
          .then((result) => {
              console.log(result.text);
              openModal();
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return (
        <div id="contact-section">
            <div id="contact-section-left">
                <div id="inner-left">
                <h2 className="contact-content">ALL INQUIRIES</h2>
                <h3 id="contact-email">EMAIL:<br></br> MEANDNOBODYBAND@GMAIL.COM</h3>
                </div>
            </div>
            <div id="contact-section-right">
                <h2 className="contact-content">SIGN UP FOR UPDATES</h2>
                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                    <input type="email" placeholder="YOUR EMAIL" id="email-input" name="user_email" required></input>
                    <br></br>
                    {modalOpen ? 
                    <div className="contact-message">
                        <span id="modal-x" onClick={() => {
                            closeModal();
                        }}>X</span>
                        <h2>Thanks for signing up!</h2>
                    </div>
                    :
                    null
                    }
                    <button className="contact-btn">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
