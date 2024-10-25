import React, { useEffect } from 'react'
import Hero from './Hero'
import Slider from './Slider'
import About from './About'
import Category from './Category'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Clint from './Clint'

const Landing = () => {
  return (
    <div id='landing'>
      
        <Hero></Hero>
        <Slider></Slider>
        <About></About>
        <Category></Category>
        <Clint></Clint>
    </div>
  )
}

export default Landing