import React from 'react'
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
export default function Main() {
  return (
    <div>
        <Banner/>
      <Skills/>
      <About/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  )
}
