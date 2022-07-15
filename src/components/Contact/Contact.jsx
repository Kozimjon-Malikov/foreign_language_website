import React from 'react'
import './contact.css'
import contact from '../../images/contact.svg'
export default function Contact() {
  return (
    <div className='content '>
      <div className='content contact_info'>
      <div className="contact_img">
        <img src={contact} alt="contact" />
      </div>
      <div className="contact_posts">
        <h2>Contact us</h2>
        <p>Discover your current English level by taking our free online English test.Sign up to our newsletter for learning tips and free resources</p>
        <form>
          <input type="email" placeholder='Enter your email' />
          <button>Subscribe</button>
        </form>
      </div>
      </div>
      <hr />
    </div>

  )
}
