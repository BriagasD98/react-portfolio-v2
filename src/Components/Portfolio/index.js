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
      <div className='card2 box1'>
        <div className='cardtitle'>
          <h2>CherryPicker</h2>
          <h2>React, APIs & CSS</h2>
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

      <div className='card2 box2'>
        <div className='cardtitle'>
          <h2>Gopher 2.0</h2>
          <h2>React, SQL, APIs & CSS</h2>
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

      <div className='card2 box3'>
        <div className='cardtitle'>
          <h2>Gopher 1.0</h2>
          <h2>HTML, CSS & APIs</h2>
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

      <div className='card2 box4'>
        <div className='cardtitle'>
          <h2>Social API</h2>
          <h2>MONGO DB & APIs</h2>
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

      <div className='card2 box5'>
        <div className='cardtitle'>
          <h2>Tech Blog</h2>
          <h2>SQL, HTML & CSS</h2>
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

      <div className='card2 box6'>
        <div className='cardtitle'>
          <h2>Run Buddy</h2>
          <h2>HTML & CSS</h2>
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
    </motion.div>
  )
}

export default Portfolio