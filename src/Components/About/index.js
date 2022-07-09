import React from 'react'
import David from '../../Assets/Images/davidbheadshot.JPG'
import stackoIcon from '../../Assets/Images/stackoflow.png'
import ghIcon from '../../Assets/Images/gh-icon2.png'
import liIcon from '../../Assets/Images/linkedin-icon.png'
import houston from '../../Assets/Images/houstonsky.png'
import { motion } from 'framer-motion'

function About() {
  return (
        <motion.div className='container2'
        initial={{width: 0}}
        animate={{width: "100vw"}}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >

          <div className='card'>

            <div className='tiles1'>
              <nav className='iconlist'>
              <a href='https://stackoverflow.com/users/15757837/david-briagas'>
                <img className='icon' src={stackoIcon} alt="Stack Overflow" />
              </a>
              <a href="https://github.com/BriagasD98">
                <img className='icon' src={ghIcon} alt="Github" />
              </a>
              <a href="https://www.linkedin.com/in/david-briagas-web-dev/">
                <img className='icon' src={liIcon} alt="LinkedIn" />
              </a>
              <a className='houston'>
                {/* <img className='icon' src={houston} alt="Houston" /> */}
                Houston, TX
              </a>
              </nav>
            </div>
            <img className='david' src={David} alt="David" />
          </div>

          <div className='card bio'>
            <p>I'm a Full-Stack Developer leveraging a strong background
               in entrepreneurship to put 110% into everything I do and creative thinking
                to find success. Recently earned a certificate in Full-Stack Web Development
                 through The University of Texas at Austin. Newly developed skills in
                  the MERN stack such as React, MongoDB, Express and Node. Skills to make
                   a visually appealing & responsive website include CSS, Bootstrap, Bulma and Handlebars.
                    Known as a creative problem-solver with a passion for developing sleek & intuitive
                     web applications. With each project, my goal is to keep my target audience
                      engaged and create recurring users on the site. I have worked effectively on a team
                       multiple times to deliver a project by specific deadlines. I’m excited to leverage
                        my skills in the industry to develop cutting-edge applications as part
                         of a tenacious & enthusiastic team.</p>
          </div>

        </motion.div>
  )
}

export default About