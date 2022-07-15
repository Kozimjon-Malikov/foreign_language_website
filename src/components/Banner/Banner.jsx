import React from 'react'
import lamp from '../../images/lamp.svg'
import banner from '../../images/banner.svg'
import './Banner.css'
export default function Banner() {
  return (
    <div className='content slider'>
      <div className="left__side">
        <div className='slider_post'> <h1>Learn <br /> Any Foreign Language</h1>
          <span><img src={lamp} alt="lamp" /></span>
        </div>
        <p>With our teachers who write a program for <br />
          each student, you will be able to make your <br />
          first sketch after the first lesson.</p>
        <button>Get started</button>
      </div>
      <div className="right__side">
        <img src={banner} alt="slider" />
      </div>
    </div>
  )
}
