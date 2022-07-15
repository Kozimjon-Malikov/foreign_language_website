import React from 'react'
import './Skill.css'
import speaking from '../../images/speaking.svg'
import writing from '../../images/writing.svg'
import reading from '../../images/reading.svg'
import lecture from '../../images/lecture.svg'
export default function Skills() {
  return (
    <div className='content skills'>
      <h2 className="name_Skill">Skills</h2>
      <div className="box">
        <div className="speaking">
          <img src={speaking} alt="speaking" />
          <h4>
            Speaking
          </h4>
          <p>Improve your English skills and confidence.
            Live classes and interactive lessons online.
            20% extra free for a limited time only

            Learn English online and improve your
            skills through our high-quality courses
            and resources – all designed for adult language learners.</p>
          <p>Improve your English skills and confidence.
            Live classes and interactive lessons online.
            20% extra free for a limited time only

            Learn English online and improve your
            skills through our high-quality courses
            and resources – all designed for adult language learners.            </p>
        </div>
        <div className="tasks">
          <div className="reading_writing">
            <div className="reading">
              <img className='img_thumb' src={writing} alt="writing" />
              <h2>Writing</h2>
              <p>One of the most important and extensive
                areas of natural science, the science that
                studies substances, also their composition  </p>
              <button className='btn'>Learn more</button>
            </div>
            <div className="reading">
              <img className='img_thumb' src={reading} alt="writing" />
              <h2>Reading</h2>
              <p>perception and response actions of the user
                resulting from the use and/or upcoming use
                of the product, system or service </p>
              <button className='btn'>Learn more</button>
            </div>
          </div>
          <div className="listening">
            <h4>Listening</h4>
            <div className="innder_content">
              <div className="info_listening">
                <p>
                  Here you can find activities to practise
                  your listening skills. Listening will help you
                  to improve your understanding
                </p>
                <button className='btn'>Learn more</button>

              </div>
              <img src={lecture} alt="lecture" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
