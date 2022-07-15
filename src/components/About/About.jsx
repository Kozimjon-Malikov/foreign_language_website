import React from 'react'
import { useState } from 'react'
import about from '../../images/about.svg'
import './About.css'
export default function About() {
  return (
    <div className="content about_content">
      <div className="content_about">
        <h2>About us</h2>
        <p>The model offers a framework for discussing problems related to the user's experience, as well as possible ways and means of solving them. Application development begins at the top level (strategy), where the future software product is described quite abstractly from the point of view of the expectations of both users and the customer.

        </p>
        <div className="statistics">
          <span>8 <i>Pupils</i></span>
          <span>18 <i>Teachers</i></span>
          <span>6 <i>Foreign languages</i></span>
        </div>
      </div>
      <div className="content_img_side">
        <img src={about} alt="about" />
      </div>
    </div>
  )
}
