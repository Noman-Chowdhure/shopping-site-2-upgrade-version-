import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ProductDetils = () => {
    const information = useLoaderData();
    const {name,price,details,image,product_size,color,category,reting} = information
  return (
    <div className=' grid grid-cols-2 justify-center justify-items-center w-full h-full gap-10 md:gap-20'>
      <div className="img-section">

      </div>
      <div className="text-section space-y-5">
       <h1 className=' text-4xl capitalize font-safari border-b-[1px] py-2 border-zinc-600'>{name}</h1>
       <p className=' font-mono text-sm lowercase'>{details}</p>
       <p className=' font-mono text-sm lowercase'>{color}</p>
       <p className=' font-mono text-xl uppercase'>size:: {product_size}</p>
       <p className=' font-mono text-xl lowercase'>price::{price}</p>
       <p className=' font-mono text-xl lowercase'>{category}</p>
       <div className=' w-5 h-5 rounded-xl ' style={{backgroundColor:color}}>
       </div>
       <button className='btnn'> add to cart</button>
      </div>
    </div>
  )
}

export default ProductDetils
