import React from 'react'

import { motion } from 'framer-motion'

function Portfolio() {
  return (
    <motion.div className='container'
    initial={{width: 0}}
    animate={{width: "100vw"}}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      THIS IS THE PORTFOLIO COMPONENT
    </motion.div>
  )
}

export default Portfolio