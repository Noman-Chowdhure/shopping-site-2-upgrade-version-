import { useGSAP } from '@gsap/react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Slider = () => {
  useGSAP(()=>{
     gsap.to('#slider h1',{
      transform:'translate(-150%)',
      duration:1.2,

      scrollTrigger:{
        trigger:'#slider h1',
        scroller:'body',
        start:'top 0%',
        end:'top -100%',
        // markers:true,
        scrub:true,
        pin:true
      }
     })
  },[])
  return (
    <div id='slider' className=' bg-gray-100 p-8 w-full h-full grid grid-cols-1 rounded-tr-3xl rounded-tl-3xl overflow-x-hidden'>
       <h1 className='md:text-[30rem] text-[10rem] font-extrabold uppercase '>exclusive</h1>
    </div>
  )
}

export default Slider