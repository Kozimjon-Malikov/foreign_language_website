import React from 'react'
import './Footer.css'
import logo from '../../images/logo.svg'
export default function Footer() {
  return (
    <div className="content">
      <div className="footer">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="reviews">
          <ul>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy </a></li>
            <li><a href="#">Cookie Policy</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}
