import React, { useState } from 'react'
import '../../../src/App.css'
import MenuIcon from '@material-ui/icons/Menu'
import Bball from '../../Assets/Images/bball2.png'
import { Link } from 'react-router-dom'

function Nav() {
  const [showLinks, setShowLinks] = useState(false);
  const [switchToggled, setSwitchToggled] = useState(false);

  const ToggleSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
    console.log(switchToggled);
  }

  // const menu_btn = document.querySelector('.hamburger');

  // menu_btn.addEventListener('click', function () {
  //   menu_btn.classList.toggle('is-active')
  // })

  return (
    <div className='renav'>
      <div className='renav2'>
        <h1 className='header'>DAVID BRIAGAS</h1>
        <button onClick={ToggleSwitch} className={switchToggled ? 'ClassToggled hamburger' : "ClassNotToggled hamburger is-active"}>
        <div className='bar'></div>
        </button>
        {/* <button onClick={()=> setShowLinks(!showLinks)} >< MenuIcon /></button> */}
      </div>
      {/* <button onClick={ToggleSwitch} className={switchToggled ? 'ClassToggled hamburger' : "ClassNotToggled hamburger is-active"}>
        <div className='bar'></div>
      </button> */}
      <div className='renav'>
        <nav className='links' style={{ width: "100%" }} id={showLinks ? "hidden" : ""}>
          <Link to='/about'> About </Link>
          <Link to='/portfolio'> Portfolio </Link>
          <Link to='/contact'> Contact </Link>
          <Link to='/resume'>Resume</Link>
        </nav>
      </div>
      <div className='balltrack'>
        <img className='baseball' src={Bball} />
      </div>
    </div>
  )
}

export default Nav