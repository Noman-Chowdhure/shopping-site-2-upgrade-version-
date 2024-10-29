import React, { useEffect } from "react";
import Hero from "./Hero";
import Slider from "./Slider";
import About from "./About";
import Category from "./Category";
import Clint from "./Clint";
import Fotter from "../shread/Fotter";

const Landing = () => {
  return (
    <div id="landing">
      <Hero></Hero>
      <Slider></Slider>
      <About></About>
      <Category></Category>
      <Clint></Clint>
      <Fotter></Fotter>
    </div>
  );
};

export default Landing;
