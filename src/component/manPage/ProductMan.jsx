import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
gsap.registerPlugin(ScrollTrigger);
const ProductMan = () => {
  const [outerwear, setOuterwear] = useState([]);
  const [footwear, setFootwear] = useState([]);
  const [pants, setPants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/man")
      .then((res) => res.json())
      .then((data) => {
        const outerwear = data.filter((abc) => abc.category == "Outerwear");
        setOuterwear(outerwear.slice(0, 10));
        const footwear = data.filter((abc) => abc.category == "Footwear");
        setFootwear(footwear.slice(0, 10));
        const pants = data.filter((abc) => abc.category == "Pants");
        setPants(pants.slice(0, 10));
      });
  }, []);

  return (
    <div id="prouductMan" className=" w-full h-full p-8">
      <h1 className=" uppercase text-[11vw] font-extrabold text-zinc-400">
        our proudct's
      </h1>
      <div className="box1 grid grid-cols-1 gap-y-20">
        <div className="child">
          <h1
            id="catego"
            className=" text-9xl uppercase text-zinc-400 font-serif text-right"
          >
            Outerwear
          </h1>

          <div className="items grid md:grid-cols-5 grid-cols-2 gap-5 justify-center justify-items-center items-center">
            {outerwear.map((abc) => (
              <ProductCard key={abc.id} itmes={abc}></ProductCard>
            ))}
          </div>
        </div>
        <div className="child">
          <h1 className=" text-9xl uppercase text-zinc-400 font-serif text-right">
            Footwear
          </h1>
          <div className="items grid md:grid-cols-5 grid-cols-2 justify-center justify-items-center items-center">
            {footwear.map((abc) => (
              <ProductCard key={abc.id} itmes={abc}></ProductCard>
            ))}
          </div>
        </div>
        <div className="child">
          <h1 className=" text-9xl uppercase text-zinc-400 font-serif text-right">
            Pants
          </h1>
          <div className="items grid md:grid-cols-5 grid-cols-2 justify-center justify-items-center items-center">
            {pants.map((abc) => (
              <ProductCard key={abc.id} itmes={abc}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMan;
