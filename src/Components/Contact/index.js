import React from "react";
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'

function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_xbxlgl1', 'template_ii70448', e.target, 'user_1Y2d3mZnf8rZgneRJe39L')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
        <motion.div className='container'
        initial={{width: 0}}
        animate={{width: "100vw"}}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <div className="container4">
                <h2 className="cardtitle4">Reach Out</h2>
            </div>
            <div className="container4">
                <form onSubmit={sendEmail}>
                    <div className="contact-form">
                        <h2 className="cardtitle4">Start a Conversation</h2>
                        <div className="form-group">
                            <h2>Your Name</h2>
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="form-group">
                            <h2>Your Email</h2>
                            <input type="email" className="form-control" placeholder="Email" name="email"/>
                        </div>
                        <div className="form-group">
                            <h2>Subject</h2>
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="form-group">
                            <h2>Write A Message</h2>
                            <textarea className="form-control" id="" cols="40" rows="5" placeholder="Your Message" name="message"></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>

        </motion.div>
    )
}

export default Contact;