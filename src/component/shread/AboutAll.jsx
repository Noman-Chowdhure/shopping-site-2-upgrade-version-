import React from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AboutAll = ({aboutt}) => {
  useGSAP(()=>{
    function ManText (){
        let taxt = document.querySelector('#headin');
        let content = taxt.textContent;
        let spli = content.split("");
        let cluttert = '';
        spli.forEach(abc => {
          cluttert += `<span>${abc}</span>`
        })
         taxt.innerHTML = cluttert
         console.log(taxt)
       }

       ManText()
       gsap.from('h1 span',{
        x:'-100%',
        // opacity:,
        duration:1,
        delay:1.2,
        stagger:0.15,
        scale:0.2,
        scrollTrigger:{
          trigger:'h1 span',
          scroller:'body',
          start:'top 50%',
          scrub:true
        }
       })

},[])
return (
<div className=' w-full h-fit bg-zinc-900 py-9 px-5 space-y-10 rounded-tl-3xl rounded-tr-3xl'>
   <p className='.aboutMan text-2xl md:text-3xl uppercase border-b-2 text-gray-500  font-mono py-4'>{aboutt}</p>
   <h1 className=' text-3xl xl:text-8xl capitalize font-semibold' id='headin'>a space for new <br /> generation creatives</h1>
   <div className="text-bx grid grid-cols-2 justify-center justify-items-center gap-10">
   <div className="box space-y-6">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum praesentium, autem saepe accusantium quisquam. Corporis id eos quibusdam doloribus vero maiores libero dicta. Quia doloribus nihil enim voluptatem aliquam.</p>
    <button className=' px-4 py-2 border-[1px] rounded-full text-white border-zinc-600'>click here to know more</button>
   </div>
   <div className="box space-y-6">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorum praesentium, autem saepe accusantium quisquam. Corporis id eos quibusdam doloribus vero maiores libero dicta. Quia doloribus nihil enim voluptatem aliquam.</p>
    <button className=' px-4 py-2 border-[1px] rounded-full text-white border-zinc-600'>click here to know more</button>
   </div>

   </div>
</div>
)
}

export default AboutAll
