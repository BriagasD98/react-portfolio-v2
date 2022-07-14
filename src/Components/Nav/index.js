import React, { useState } from 'react'
import '../../../src/App.css'
import MenuIcon from '@material-ui/icons/Menu'
import hamburger from '../../Assets/Images/hamburger.png'
import { Link } from 'react-router-dom'

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className='renav'>
      <div className='renav2'>
        <h1 className='header'>DAVID BRIAGAS</h1>
        <button onClick={()=> setShowLinks(!showLinks)} >< MenuIcon /></button>
      </div>
      <div className='renav'>
        <nav className='links' style={{ width: "100%" }} id={showLinks ? "hidden" : ""}>
          <Link to='/about'> About </Link>
          <Link to='/portfolio'> Portfolio </Link>
          <Link to='/contact'> Contact </Link>
          <Link to='/resume'>Resume</Link>
        </nav>
        <button onClick={() => setShowLinks(!showLinks)} >Open</button>
      </div>
      <button onClick={() => setShowLinks(!showLinks)} >Open</button>
    </div>
  )
}

export default Nav