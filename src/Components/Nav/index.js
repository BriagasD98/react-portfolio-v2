import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='renav'>
      <nav style={{ width: "100%" }}>
        {/* <Link to='/'> About </Link> */}
        <Link to='/about'> About </Link>
        <Link to='/portfolio'> Portfolio </Link>
        <Link to='/contact'> Contact </Link>
        <Link to='/resume'>Resume</Link>
      </nav>
      <button>Open</button>
    </div>
  )
}

export default Nav