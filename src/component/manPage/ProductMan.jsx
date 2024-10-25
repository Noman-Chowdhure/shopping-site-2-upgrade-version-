import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
gsap.registerPlugin(ScrollTrigger);
const ProductMan = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/man")
      .then((res) => res.json())
      .then((data) => setProduct(data.slice(0, 10)));
  }, []);
  console.log(product);
  const addToCart = () => {
    console.log("hello world..");
  };
  // useGSAP(()=>{
  //     gsap.from('#prouductMan',{
  //         transform:'translate(-100%)',
  //         opacity:0,
  //         rotate:90,
  //         duration:1.5,
  //         scrollTrigger:{
  //             trigger:"#prouductMan",
  //             scroller:'body',
  //             start:'top 50%',
  //             end:"top -100%",
  //             markers:true,
  //         }
  //     })
  // },[])

  return (
    <div id="prouductMan" className=" w-full h-full p-8">
      <h1>out proudct's</h1>
      <div className="items grid md:grid-cols-5 grid-cols-2 justify-center justify-items-center items-center">
        {product.map((abc) => (
          <ProductCard
            addToCart={addToCart}
            key={abc.id}
            itmes={abc}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductMan;
