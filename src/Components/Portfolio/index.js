import React from 'react'

import { motion } from 'framer-motion'

function Portfolio() {
  return (
    <motion.div className='container2'
    initial={{width: 0}}
    animate={{width: "100vw"}}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className='card2 box1'></div>
      <div className='card2 box2'></div>
      <div className='card2 box3'></div>
      <div className='card2 box4'></div>
      <div className='card2 box5'></div>
      <div className='card2 box6'></div>
    </motion.div>
  )
}

export default Portfolio