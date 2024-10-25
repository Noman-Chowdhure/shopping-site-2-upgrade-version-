import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { NavLink } from "react-router-dom";
import { navbar } from "../../utils/custom";

const Navbar = () => {
  useGSAP(() => {
    let open = document.querySelector("#open");
    let close = document.querySelector("#close");
    let time = gsap.timeline();

    time.to(".navItems", {
      x: "100%",
      opacity: 1,
      duration: 1.0,
    });
    time.from(".navItems ul", {
      x: -200,
      opacity: 0,
      duration: 0.5,
    });
    time.from(".navItems ul .nav", {
      opacity: 0,
      stagger: 0.5,
    });

    time.pause();

    open.addEventListener("click", () => {
      time.play();
    });
    close.addEventListener("click", () => {
      time.reverse();
    });
  }, []);
  return (
    <div>
      <div className=" flex justify-between p-8 z-10">
        <div className="navmenu">
          <button id="open">
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
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
          <div className="navItems bg-slate-100 w-1/3 h-screen absolute -left-1/3 top-0">
            <button className=" p-4" id="close">
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className=" absolute top-1/3 left-1/3 transform -translate-x-2/4 -translate-y-2/4">
              <ul className="">
                {navbar.map((abc) => (
                  <NavLink
                    className="nav block mt-8 capitalize md:text-4xl xl:text-5xl"
                    to={abc.path}
                    key={abc.id}
                    
                  >
                    {abc.nam}
                  </NavLink>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="hero flex gap-x-4">
          <div className="search-btn">
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <div className="shoping-cart">
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
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
