import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(()=>{
     function breakText (){
      let taxt = document.querySelector('h1');
      let content = taxt.textContent;
      let spli = content.split("");
      let cluttert = '';
      spli.forEach(abc => {
        cluttert += `<span>${abc}</span>`
      })
       taxt.innerHTML = cluttert
       console.log(taxt)
     }
     breakText();
     gsap.to('h1 span',{
      y:'-100%',
      opacity:0,
      duration:1,
      delay:1.2,
      stagger:0.15,
      scrollTrigger:{
        trigger:'h1 span',
        scroller:'body',
        start:'top 50%',
        scrub:true
      }
     })
  },[])
  return (
    <div className=' relative'>
      <div id='fuck' className='w-full h-screen grid justify-center items-center -z-10'>
      <div className="box">
        <h1 className='capitalize font-mono text-5xl md:text-[10rem]'>e-shopping</h1>
      </div>
      </div>
      <div id='heros' className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
         <p>30%</p>
      </div>
    </div>
  );
}

export default Hero;
