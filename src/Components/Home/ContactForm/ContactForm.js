import './ContactForm.css';
import React from 'react';

const ContactForm = () => {
    return (
        <section id="contact-form" >
            <div className="contact-header text-center my-5 " id="form-header">
                <h5 className="text-uppercase mb-3 " style={{ color: '#1CC7C1' }}>contact us</h5>
                <h3 className="text-white">Always Contact With Us</h3>
            </div>
            <div id="form-div">
                <form action="" className="text-center " >
                    <input type="email" name="email" className="form-control" placeholder="E-mail Address*" required />
                    <br /><br />
                    <input type="text" name="subject" className="form-control" placeholder="Subject*" required />
                    <br /><br />
                    <textarea id="msg-area" className="form-control" placeholder="Your Message" style={{ resize: 'none', height: '150px' }} ></textarea>
                    <br /><br />
                    <input type="submit" id="submit-btn" valid="Submit" className="btn-brand" />
                </form>
            </div>
        </section>
    );
};

export default ContactForm;