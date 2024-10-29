import React from "react";
import AboutAll from "../shread/AboutAll";
import Heros from "../shread/Heros";
import Slider from "../shread/Slider";
import ProductMan from "./ProductMan";
import Fotter from "../shread/Fotter";

const Man = () => {
  return (
    <div className=" overflow-hidden">
      <Heros head="man"></Heros>
      <Slider></Slider>
      <AboutAll aboutt="man page"></AboutAll>
      <ProductMan></ProductMan>
      <Fotter></Fotter>
    </div>
  );
};

export default Man;
