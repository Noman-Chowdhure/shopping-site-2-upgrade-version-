import React from 'react'

import ProductMan from './ProductMan'
import Heros from '../shread/Heros'
import Slider from '../shread/Slider'
import AboutAll from '../shread/AboutAll'

const Man = () => {
  return (
    <div className=' overflow-x-hidden'>
        <Heros head='man'></Heros>
        <Slider></Slider>
        <AboutAll aboutt='man page'></AboutAll>
        <ProductMan></ProductMan>
    </div>
  )
}

export default Man