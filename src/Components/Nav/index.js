import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav style={{ width: "100%" }}>
        {/* <Link to='/'> About </Link> */}
        <Link to='/about'> About </Link>
        <Link to='/contact'> Contact </Link>
        <Link to='/portfolio'> Portfolio </Link>
        <Link to='/resume'>Resume</Link>
      </nav>
  )
}

export default Nav