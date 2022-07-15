import React from 'react'
import './Header.css'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
export default function Header() {
  function HandleOpen(){
    if(window.innerWidth<800){
      document.getElementById('menuzord').style.display='none'
    }
  }
  HandleOpen()
  return (
    <div>
      <header className='content'>
        <div className='logo'>
          <Link to='/Main' ><img src={logo} alt="logo" /></Link>
        </div>
        <div className='navbar'>
          <ul>
            <Link to='/Main' ><li><a href="#">Home</a></li></Link>
            <Link to='/Skills_info'><li><a href="#">Skill</a></li></Link>
            <Link to='/About_page'><li><a href="#">About us</a></li></Link>
            <Link to='/pricing'><li><a href="#">Pricing</a></li></Link>
            <Link to='/Contact_info' ><li><a href="#">Contacts</a></li></Link>
          </ul>
        </div>
        <div className='sign'>
          <button>Let's Talk</button>
        </div>
        <span id='close' onClick={HandleOpen} >==</span>
      </header>
    </div>
  )
}
