import React from 'react'
import ghIcon from '../../Assets/Images/gh-icon2.png'

import { motion } from 'framer-motion'

function Portfolio() {
  return (
    <motion.div className='container2'
    initial={{width: 0}}
    animate={{width: "100vw"}}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className='card2 box1'>Box 1
        <div className='cardtitle'>
          <h2>Project 1</h2>
          <h2>Example 1</h2>
        </div>
        <div className='btnboard'>
          <a href="https://github.com/BriagasD98">
            <img className='icon2' src={ghIcon} alt="Github" />
          </a>
          <a href="https://github.com/BriagasD98">
            <img className='icon2' src={ghIcon} alt="Github" />
          </a>
        </div>
      </div>
      <div className='card2 box2'>Box 2
      <a>Project 2</a>
      <span>Example2</span>
      </div>
      <div className='card2 box3'>Box 3</div>
      <div className='card2 box4'>Box 4</div>
      <div className='card2 box5'>Box 5</div>
      <div className='card2 box6'>Box 6</div>
    </motion.div>
  )
}

export default Portfolio