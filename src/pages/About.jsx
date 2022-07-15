import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div className='content'>
        <h1>Biz haqimizda</h1>
        <Link to='/' ><h4 className='text-black-100 my-5 text-5xl text-s text-sm-7' >Ortga</h4></Link>
    </div>
  )
}
