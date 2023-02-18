import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex w-screen h-[80px] z-10 bg-white fixed  justify-between items-center p-8">
      <h1 className="text-2xl font-bold mr-4 sm-:text-4xl">arrows</h1>
      <ul className="hidden md:flex">
        <li>
          <Link to="/home">
            <button className="border-none bg-transparent text-black mr-4">
              Home
            </button>
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <button className="border-none bg-transparent text-black mr-4">
              Portfolio
            </button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <button className="border-none bg-transparent text-black mr-4">
              Contact Me
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
