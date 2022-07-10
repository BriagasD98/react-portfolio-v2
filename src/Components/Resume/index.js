import React from 'react'
import { motion } from 'framer-motion'

import liQRCode from '../../Assets/Images/DavidB-LI-QR.png'
import gdocs from '../../Assets/Images/google-docs.png'


function Resume() {
  return (
    <motion.div className='container'
    initial={{width: 0}}
    animate={{width: "100vw"}}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
    <div className='container3'>

      <div className='card3 resume'>
        {/* <div>
          <h2>Click <span>HERE</span> to View Resume!</h2>
        </div>
        <div>
          <h2>Download My Resume <span>HERE</span>!</h2>
        </div> */}
        <nav className='iconlist'>
          <a>
          <h2>Click <span>HERE</span> to View Resume!</h2>
          <img className='icon' src={gdocs} />
          </a>
          <a>
            <h2>Download My Resume <span>HERE</span>!</h2>
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