import React from 'react'
import David from '../../Assets/Images/davidbheadshot.JPG'
import emailIcon from '../../Assets/Images/email-icon.png'
import ghIcon from '../../Assets/Images/Github-icon.png'
import liIcon from '../../Assets/Images/linkedin-icon.png'

function About() {
  return (
        <div className='container2'>

          <div className='card'>

            <div className='tiles1'>
              <a>
                <img className='icon' src={emailIcon} alt="Email" />
              </a>
              <a href="https://github.com/BriagasD98">
                <img className='icon' src={ghIcon} alt="Github" />
              </a>
              <a href="https://www.linkedin.com/in/david-briagas-web-dev/">
                <img className='icon' src={liIcon} alt="LinkedIn" />
              </a>
            </div>
            <img className='david' src={David} alt="David" />
          </div>

          <div className='card'>
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

        </div>
  )
}

export default About