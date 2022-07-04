import React from "react";
import { motion } from 'framer-motion'

function Contact() {
    return (
        <motion.div className='container'
        initial={{width: 0}}
        animate={{width: "100vw"}}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            THIS IS THE CONTACT COMPONENT
        </motion.div>
    )
}

export default Contact;