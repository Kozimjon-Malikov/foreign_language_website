import React from 'react'
import './Pricing.css'
import price_1 from '../../images/pricing_1.svg'
import price_2 from '../../images/pricing_2.svg'
import price_3 from '../../images/pricing_3.svg'
// import { pricing_data } from './pricing_data'
export default function Pricing() {
  return (
    <div className='content'>
      <h2 className='pricing_head'>Pricing</h2>
      {/* ishlamadi  */}
      {/* {pricing_data.map((item,index) => (
        <div className="pricing" key={index.id} >
          <img src={item.img} alt="" />
          <h4>{item.name}</h4>
          <p>{item.title}</p>
        </div>
      ))} */}
      <div className="pricing content">
        <div className="items">
          <img src={price_1} alt="" />
          <div className="content_info">
            <h4>Self-study online course</h4>
            <p>Start learning English online in live classes
              with qualifie  ver the world.</p>
            <a href="#"> £5.99 <span>per month</span></a>
          </div>
        </div>
        <div className="items">
          <img src={price_2} alt="" />
          <div className="content_info">
            <h4>Live online classes</h4>
            <p>Interactive group classes with expert
              teachers. Free 7-day trial</p>
            <a href="#"> £12.99 <span>per month</span></a>
          </div>
        </div>
        <div className="items">
          <img src={price_3} alt="" />
          <div className="content_info">
            <h4>Personal Tuition</h4>
            <p>Online one-to-one English tutoring – enjoy
              our first session for only $1</p>
            <a href="#"> £20.99 <span>per month</span></a>
          </div>
        </div>
      </div>

    </div>
  )
}
