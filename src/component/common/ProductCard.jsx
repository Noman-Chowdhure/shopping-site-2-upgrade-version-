import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const ProductCard = ({itmes}) => {
    const {name,price,image} = itmes

  return (
    <div id='card' className=' bg-slate-100 w-full h-full p-5 shadow-lg flex'>
      <div className="slide">
        30% off
      </div>
      <div className="box">
        <img src="https://i.pinimg.com/564x/24/a5/c2/24a5c2fe42201494dfe5cf71280b7845.jpg" alt="" />
        <h1>{name}</h1>
        <p>{price}</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"   className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
      </div>

    </div>
  )
}

export default ProductCard