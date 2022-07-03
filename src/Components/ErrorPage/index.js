import React from 'react'
import Dustin from '../../Assets/Images/dustin-png.png'

function ErrorPage() {
  return (
    <div className='container errorpage'>
      {/* 404 PAGE NOT FOUND! Very Strange indeed... */}
      <div className='error'>
      404 PAGE NOT FOUND! Very Strange indeed...
      </div>
      <div className='dustin container'>
        <img className='dustin' src={Dustin} alt="Dustin" />
        <div className='quote'>"WHY ARE YOU KEEPING THIS CURIOSITY DOOR LOCKED?"</div>
      </div>
    </div>
  )
}

export default ErrorPage