import React from 'react'
import { Link } from 'react-router-dom'

const Fotter = () => {
  return (
    <div className=' grid grid-cols-2 justify-center justify-items-center overflow-x-hidden '>
        <div className="heading max-sm:hidden">
          <h1 className=' text-4xl md:text-8xl font-extrabold uppercase'>e-shop</h1>
        </div>
        <div className="detils max-sm:w-full ">
            <h1 className=' text-4xl md:text-8xl font-extrabold uppercase'>presentations</h1>

            <div className="servises grid grid-cols-2 gap-10 justify-center items-center justify-items-start ">
                <div className="service">
                    <p>s:</p>
                     <ul>
                        <Link className=' block'>instagram</Link>
                        <Link className=' block'>behance</Link>
                        <Link className=' block'>facebook</Link>
                        <Link className=' block'>whatup</Link>
                     </ul>
                </div>
                <div className="service">
                   <p>jyaffa1233@gmail.com</p>
                </div>
                <div className="service">
                    <p>l:</p>
                     <ul>
                        <Link>202-1965 W 4th Ave</Link>
                        <Link className=' block'>barisal,bangladesh</Link>
                     </ul>
                </div>
                <div className="service">
                    <p>m:</p>
                     <ul>
                        <Link className=' block'>home</Link>
                        <Link className=' block'>about</Link>
                        <Link className=' block'>product</Link>
                        <Link className=' block'>man</Link>
                        <Link className=' block'>woman</Link>
                     </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fotter