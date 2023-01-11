import React from "react";
import HeroImage from "../assets/avatar.png";
import { TiArrowRightOutline } from "react-icons/ti";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      name="home"
      className="min-h-screen w-full flex justify-center items-center bg-gradient-to-b from-color1 via-color1 to-color2 text-slate-200"
    >
      <div
        className="container min-h-screen p-8 mt-8 flex flex-col justify-center items-center 
        md:flex-row md:justify-center"
      >
        <div className="flex flex-[2] flex-col justify-evenly h-1/2 md:space-y-16 lg:pl-8 xl:pl-20">
          <p>Welcome, I'm</p>
          <h1 className="text-3xl sm:text-7xl">Gerardo Castañeda</h1>
          <h2 className="text-4xl font-signature text-center text-color3 sm:w-full md:text-6xl">
            Frontend Web Developer
          </h2>
          <p className="text-lg leading-none text-justify text-zinc-300 max-w-lg sm:text-xl ">
            Looking to share my passion to the world. I love to create intuitive
            and visually appealing web applications. Join me down and let's
            collaborate together!
          </p>
          <div className="flex justify-between lg:block">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group w-fit px-6 py-3 flex font-bold
              items-center rounded-md bg-gradient-to-r from-color4
              to-color5 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <TiArrowRightOutline size={25} className="ml-1" />
              </span>
            </Link>
            {/* mobile only resume button */}
            <a
              href="/Gerardo-Castaneda-Resume.pdf"
              className="w-fit px-6 py-3 font-bold rounded-md 
              bg-gradient-to-r from-color4 to-color5 cursor-pointer
              lg:hidden"
              download={true}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="flex-1">
          <img
            src={HeroImage}
            alt="my profile pic"
            className="rounded-full mx-auto w-3/5 border-2 border-color4 shadow-lg hover:shadow-color5 duration-300 md:w-4/5"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
