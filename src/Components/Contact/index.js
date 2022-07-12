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
            <div className="container">
                <form onSubmit={sendEmail}>
                    
                </form>
            </div>

        </motion.div>
    )
}

export default Contact;