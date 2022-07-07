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

      <div className='card2 box2'>
        <div className='cardtitle'>
          <h2>Project 2</h2>
          <h2>Example 2</h2>
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
          <h2>Project 3</h2>
          <h2>Example 3</h2>
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
          <h2>Project 4</h2>
          <h2>Example 4</h2>
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
          <h2>Project 5</h2>
          <h2>Example 5</h2>
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
          <h2>Project 6</h2>
          <h2>Example 6</h2>
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