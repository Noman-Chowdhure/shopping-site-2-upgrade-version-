import React from "react";
import { Link } from "react-router-dom";
import Eyes from "../../component/shread/Eyes";

const Fotter = () => {
  return (
    <div className=" grid grid-cols-2 justify-center justify-items-center overflow-x-hidden ">
      <div className="heading max-sm:hidden">
        <h1 className=" text-4xl md:text-8xl font-extrabold uppercase">
          e-shop
        </h1>
        <Eyes></Eyes>
      </div>
      <div className="detils max-sm:w-full ">
        <h1 className=" text-4xl md:text-8xl font-extrabold uppercase">
          presentations
        </h1>

        <div className="servises grid grid-cols-2 gap-10 justify-center items-center justify-items-start ">
          <div className="service">
            <p className=" font-safari uppercase text-3xl">s:</p>
            <ul>
              <Link className=" font-mono uppercase border-b-[1px] border-zinc-500 py-2 block">instagram</Link>
              <Link className=" font-mono uppercase border-b-[1px] border-zinc-500 py-2 block">behance</Link>
              <Link className=" font-mono uppercase border-b-[1px] border-zinc-500 py-2 block">facebook</Link>
              <Link className=" font-mono uppercase border-b-[1px] border-zinc-500 py-2 block">whatup</Link>
            </ul>
          </div>
          <div className="service">
            <p className=" font-safari ">jyaffa1233@gmail.com</p>
          </div>
          <div className="service">
            <p className=" font-safari uppercase text-3xl">l:</p>
            <ul>
              <Link>202-1965 W 4th Ave</Link>
              <Link className=" block">barisal,bangladesh</Link>
            </ul>
          </div>
          <div className="service">
            <p className=" font-safari uppercase text-3xl">m:</p>
            <ul className=" grid grid-cols-3 gap-3">
              <Link className=" font-mono uppercase border-b-[1px] border-zinc-500 py-2 block">home</Link>
              <Link className=" font-mono uppercase border-b-[1px] border-zinc-500 py-2 block">about</Link>
              <Link className=" font-mono uppercase border-b-[1px] border-zinc-500 py-2 block">product</Link>
              <Link className=" font-mono uppercase border-b-[1px] border-zinc-500 py-2 block">man</Link>
              <Link className=" font-mono uppercase border-b-[1px] border-zinc-500 py-2 block">woman</Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
