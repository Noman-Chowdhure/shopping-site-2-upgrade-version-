import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'


const Category = () => {

  return (
    <div className=' bg-zinc-900 p-8 w-full h-full rounded-tr-3xl rounded-tl-3xl'>
        <div className="heading border-b-[2px]">
            <h1 className=' text-4xl md:text-6 xl:text-9xl font-mono capitalize text-white font-light'>category</h1>
        </div>
        <div className="nav grid grid-cols-2 justify-center justify-items-center  my-8">
          {["man","woman"].map(abc => <Link className=' text-orange-500 text-3xl capitalize' to={abc} >{abc}</Link>)}
        </div>
        <div className="category grid md:grid-cols-2 md:gap-x-20 gap-10">
          <div className="man">
             <div className="cardContainer relative bg-zinc-900 rounded-3xl">
                <div className="card w-1/2 h-1/2 mx-auto py-8">
                   <Link to='/man'>
                      <img src="https://i.pinimg.com/enabled/564x/6d/db/36/6ddb36d2cb4ca39e87f52b704ff35195.jpg" alt="" />
                   </Link>
                </div>
             </div>
          </div>
          <div className="woman">
          <div className="cardContainer relative  bg-zinc-800 rounded-3xl">
                <div className="card w-1/2 h-1/2 mx-auto py-8">
                   <Link to='/woman'>
                      <img src="https://i.pinimg.com/enabled/564x/69/9f/74/699f743a3dc0fb81c07a8636215ae437.jpg" alt="" />
                   </Link>
                </div>
             </div>
          </div>
        </div>
    </div>
  )
}

export default Category