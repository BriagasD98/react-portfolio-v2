import React from 'react'
import Dustin from '../../Assets/Images/dustin-png.png'
import { motion } from 'framer-motion'

function ErrorPage() {
  return (
    <motion.div className='container errorpage'
    initial={{width: 0}}
    animate={{width: "100vw"}}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className='error'>
      404 PAGE NOT FOUND! Very Strange indeed...
      </div>
      <div className='dustin container'>
        <img className='dustin' src={Dustin} alt="Dustin" />
        <div className='quote'>"WHY ARE YOU KEEPING THIS CURIOSITY DOOR LOCKED?"</div>
      </div>
    </motion.div>
  )
}

export default ErrorPage