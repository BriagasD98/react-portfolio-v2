import React from 'react'
import { motion } from 'framer-motion'


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
          <h2>Download My Resume Here!</h2>
        </div>
        <div>
          <h2>Click Here to View!</h2>
        </div>
      </div>

      <div className='card3 resume'>
        <div>
          <h2>SCAN ME To View App On Mobile Device!</h2>
          <img />
        </div>
      </div>

    </div>
    </motion.div>
  )
}

export default Resume