import React from 'react'
import { motion } from 'framer-motion'

import liQRCode from '../../Assets/Images/DavidB-LI-QR.png'


function Resume() {
  return (
    <motion.div className='container'
    initial={{width: 0}}
    animate={{width: "100vw"}}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
    <div className='container3'>

      <div className='card3 resume'>
        <div>
          <h2>Click Here to View Resume!</h2>
        </div>
        <div>
          <h2>Download My Resume Here!</h2>
        </div>
      </div>

      <div className='card3 resume'>
        <div>
          <h2>SCAN ME To View Portfolio App On Mobile Device!</h2>
          <img className='icon3' src={liQRCode} />
        </div>
      </div>

    </div>
    </motion.div>
  )
}

export default Resume