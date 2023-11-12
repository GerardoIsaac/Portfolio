import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logoDark from "../assets/dark-shadow-logo.svg";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const links = ["home", "about", "portfolio", "skills", "contact"];

  return (
    <nav
      className="flex justify-between items-center px-4 bg-colordark opacity-95 
      w-full fixed z-20 top-0 sm:py-1 lg:py-2 "
    >
      <Link to="home" smooth duration={900} className="cursor-pointer">
        <img src={logoDark} alt="logo" width={280} height="auto" />
      </Link>

      {/* Desktop */}
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link}
            className="p-2 cursor-pointer capitalize text-lg font-medium text-slate-400 
            hover:scale-110 hover:text-white duration-200
            lg:px-8"
          >
            <Link
              to={link}
              spy
              offset={10}
              activeClass="text-white"
              smooth
              duration={900}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <div
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="cursor-pointer pr-4 z-10 text-slate-300 md:hidden"
      >
        {isNavOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {isNavOpen && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full 
        h-screen bg-gradient-to-br from-colordark via-colordark to-color1 text-slate-200"
        >
          {links.map((link) => (
            <li key={link} className="cursor-pointer capitalize py-6 text-4xl">
              <Link
                to={link}
                onClick={() => setIsNavOpen(!isNavOpen)}
                smooth
                duration={900}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
