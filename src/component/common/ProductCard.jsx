import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);
const ProductCard = ({itmes}) => {
    const {name,title,image,id} = itmes
    console.log(itmes)
  return (
    <Link to={`/productDetils/${id}`}>
     
     <div id='card' className=' bg-slate-100 w-full  p-5 rounded-3xl shadow-lg flex'>
      <div className="slide">
        30% off
      </div>
      <div className="box">
        <img className=' mix-blend-darken' src={image} alt="" />
        <h1>{name}</h1>
        <p>{title}</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"   className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>

    </div> 
    </Link>
  )
}

export default ProductCard