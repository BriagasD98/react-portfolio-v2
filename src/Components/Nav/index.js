import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav style={{ width: "100%" }}>
        <Link to='/'> Home </Link>
        <Link to='/about'> About </Link>
        <Link to='/portfolio'> Portfolio </Link>
      </nav>
  )
}

export default Nav