import React from 'react'
import Navbar from '../components/Navbar'
import Footor from '../components/Footor'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="I am friendly Front-end developer and 
       currently learning Back-end" />
       <AboutContent/>
      <Footor />
    </div>
  )
}

export default About
