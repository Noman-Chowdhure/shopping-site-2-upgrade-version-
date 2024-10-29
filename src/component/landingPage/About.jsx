import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Eyes from "../shread/Eyes";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useGSAP(() => {
    gsap.from("#about", {
      width: "100%",
      height: "100%",
      scale: 0.7,
      opacity: 0,
      duration: 2.3,
      scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 50%",
        end: "top -100%",
      },
    });

    gsap.to("#topNav",{
      scale:4.0,
      scrollTrigger:{
        trigger:'#topNav',
        scroller:'body',
        start:"top 60%",
        end:"top -100%",
        scrub:true
      }
    })
    gsap.from("#ol li", {
      x: -300,
      opacity: 0,
      duration: 1.3,
      stagger: 1.2,
      scrollTrigger: {
        trigger: "#ol li",
        scroller: "body",
        start: "top 50%",
        end: "top -100%",
      },
    });
  }, []);
  return (
    <div className=" p-4" id="about">
      <h1
        id="topNav"
        className=" my-8 xl:text-6xl md:text-4xl capitalize font-extrabold"
      >
        we make sure your product & creation deliverd porperly...
      </h1>

      <div id="content" className=" w-full h-fit grid grid-cols-2 md:gird-cols-1 gap-10 justify-center justify-items-center">
        <div className="eyes max-sm:hidden">
          <h1 className=" uppercase font-serif border-b-2 text-xl">about us</h1>
          <Eyes></Eyes>
        </div>
        <div className="text-content max-sm:col-span-2 space-y-4">
          <h1 className=" text-2xl capitalize font-safari ">
            why we are best platform for online..?
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            aliquam vel possimus magni ipsa fugiat quam repudiandae expedita
            harum, consectetur itaque eum ex repellat, sit ullam blanditiis quae
            nobis eaque!
          </p>
          <nav className=" max-sm:grid justify-center justify-items-center">
            <ol id="ol" className=" space-y-2">
              <li className=" border-[1px] rounded-full w-fit px-4 border-zinc-400">
                we have latest colution ..
              </li>
              <li className=" border-[1px] rounded-full w-fit px-4 border-zinc-400">
                we have latest colution ..
              </li>
              <li className=" border-[1px] rounded-full w-fit px-4 border-zinc-400">
                we have latest colution ..
              </li>
              <li className=" border-[1px] rounded-full w-fit px-4 border-zinc-400">
                we have latest colution ..
              </li>
              <li className=" border-[1px] rounded-full w-fit px-4 border-zinc-400">
                we have latest colution ..
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default About;
