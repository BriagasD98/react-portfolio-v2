import React from "react";
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'

function Contact() {

    function sendEmail(e) {

    }

    return (
        <motion.div className='container'
        initial={{width: 0}}
        animate={{width: "100vw"}}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <div className="container4">
                <form onSubmit={sendEmail}>
                    <div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" name="email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
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