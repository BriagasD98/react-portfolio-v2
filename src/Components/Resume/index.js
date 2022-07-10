import React from 'react'
import { motion } from 'framer-motion'

import liQRCode from '../../Assets/Images/DavidB-LI-QR.png'
import gdocs from '../../Assets/Images/google-docs.png'
import fileexp from '../../Assets/Images/file-exp2.png'


function Resume() {
  return (
    <motion.div className='container'
    initial={{width: 0}}
    animate={{width: "100vw"}}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
    <div className='container3'>

      <div className='card3 resume'>
        <nav className='iconlist2'>
          <a href='https://docs.google.com/document/d/1BHQSK87pGRyUdzCEycDPM5r7ZPkLKtQmK0RNpI-YxsM/edit?usp=sharing'>
            <h2>Click <span>HERE</span> to View Resume!</h2>
            <img className='icon4' src={gdocs} />
          </a>
          <a className='skills'>
            REACT <span>|</span> CSS <span>|</span> JAVASCRIPT <span>|</span>  
             GIT <span>|</span> SQL <span>|</span> NODE <span>|</span> EXPRESS <span>|</span> 
             HEROKU <span>|</span> REST APIs <span>|</span> GITHUB <span>|</span> MONGODB 
            {/* <h2>Download My Resume <span>HERE</span>!</h2>
            <img className='icon4' src={fileexp} /> */}
          </a>
        </nav>
      </div>

      <div className='card3 resume'>
        <div>
          <h2><span>SCAN ME</span> To View Portfolio App On Mobile Device!</h2>
          <img className='icon3' src={liQRCode} />
        </div>
      </div>

    </div>
    </motion.div>
  )
}

export default Resume