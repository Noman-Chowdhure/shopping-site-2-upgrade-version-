import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetils = () => {
  const information = useLoaderData();
  const [cout, setCout] = useState(0);
  const { name, price, title, details, image, product_size, color, category } =
    information;
  const addToCart = () => {
    console.log();
    fetch("http://localhost:3000/man/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(information),
    })
      .then((res) => res.json())
      .then((infor) => console.log(infor));
  };
  return (
    <div className=" grid grid-cols-2 justify-center justify-items-center w-full h-full gap-10 md:gap-20">
      <div className="img-section">
        <img className=" mix-blend-darken" src={image} alt="" />
      </div>
      <div className="text-section grid grid-cols-2 justify-center items-center">
        <div className="detils space-y-4">
          <p>{title}</p>
          <h1 className=" text-4xl capitalize font-safari font-extrabold">
            {name}
          </h1>
          <p className=" text-sm uppercase font-semibold ">{details}</p>
          <p className=" font-safari  text-sm uppercase font-semibold ">
            size:: {product_size}
          </p>
          <p className=" font-safari  text-sm uppercase font-semibold ">
            price::{price}
          </p>
          <p className=" font-safari  text-sm uppercase font-semibold ">
            {category}
          </p>

          <div className="btn-menu flex gap-10 ">
            <div className="cart">
              <button className="btnn" onClick={addToCart}>
                {" "}
                add to cart
              </button>
            </div>

            <div className="counter flex gap-4 items-center btnn">
              <button
                onClick={() => setCout((cout) => (cout == 0 ? 0 : cout - 1))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
              <p>{cout}</p>
              <button
                onClick={() => setCout((cout) => (cout === 4 ? 0 : cout + 1))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="colors">
          <p className=" font-mono text-xl lowercase">color:: {color}</p>
          <div
            className=" w-5 h-5 rounded-xl "
            style={{ backgroundColor: color }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetils;
