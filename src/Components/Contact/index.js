import React from "react";
import emailjs from 'emailjs-com'
import ghIcon from '../../Assets/Images/gh-icon2.png'
import liIcon from '../../Assets/Images/linkedin-icon.png'
import emailIcon from '../../Assets/Images/email-icon.png'
import geopin from '../../Assets/Images/pin.png'
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

    // function validation() {
    //     var form = document.getElementById('form');
    //     var email = document.getElementById('email').value;
    //     var text = document.getElementById('text');
    //     var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    //     if (email.matches(pattern))
    //     {
    //         form.classList.add('valid');
    //         form.classList.remove('invalid');
    //         text.innerHTML = 'Your Email Address is Valid.';
    //         text.style.color = "#00ff00";
    //     }
    //     else
    //     {
    //         form.classList.remove('valid');
    //         form.classList.add('invalid');
    //         text.innerHTML = 'Please Enter Valid Email Address.';
    //         text.style.color = '#ff0000';
    //     }

    //     if (email == '')
    //     {
    //         form.classList.remove('valid');
    //         form.classList.remove('invalid');
    //         text.innerHTML = '';
    //         text.style.color = '#00ff00';
    //     }
    // }

    return (
        <motion.div className='container'
        initial={{width: 0}}
        animate={{width: "100vw"}}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <div className="container4 reachout">
                <h2 className="cardtitle4">Reach Out</h2>
                <div className='tiles2'>
                    <nav className='iconlist'>
                    <a href="https://github.com/BriagasD98">
                        <img className='icon5' src={emailIcon} alt="Email" />
                        <span>briagasdavid@yahoo.com</span>
                    </a>
                    <a href="https://github.com/BriagasD98">
                        <img className='icon5' src={ghIcon} alt="Github" />
                        <span>BriagasD98</span>
                    </a>
                    <a href="https://www.linkedin.com/in/david-briagas-web-dev/">
                        <img className='icon5' src={liIcon} alt="LinkedIn" />
                        <span>David Briagas</span>
                    </a>
                    <a className='houston'>
                        <img className="icon5" src={geopin} alt="Location" />
                        <span>Houston, Texas</span>
                    </a>
                    </nav>
                </div>
            </div>
            <div className="container4">
                <form onSubmit={sendEmail}>
                    <div className="contact-form">
                        <h2 className="cardtitle4">Start a Conversation</h2>
                        <div className="form-group">
                            <h2>Your Name</h2>
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        {/* Email Validation START*/}

                        <div className="form-group">
                            <h2>Your Email</h2>
                            <input type="text" id="email" className="form-control" placeholder="Email" name="email"/>
                            <span id="text"></span>
                        </div>
                        
                        {/* Email Validation END */}
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