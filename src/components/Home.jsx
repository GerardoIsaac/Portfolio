import React from "react";
import HeroImage from "../assets/heroImage.png";
import { TiArrowRightOutline } from "react-icons/ti";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      name="home"
      className="min-h-screen w-full flex justify-center items-center bg-gradient-to-b from-color1 via-color1 to-color2 text-slate-200"
    >
      <div
        className="container min-h-screen p-8 mt-8 flex flex-col justify-evenly items-center 
        md:flex-row md:justify-evenly"
      >
        <div className="flex flex-col justify-center space-y-3 h-1/2 md:space-y-5">
          <h1 className="text-3xl sm:text-7xl">Gerardo Castañeda</h1>
          <h2 className="text-3xl font-signature text-center text-color3 sm:w-full sm:text-4xl">
            Frontend Web Developer
          </h2>
          <p className="text-lg leading-none text-justify text-zinc-300 max-w-md sm:text-xl">
            A Frontend focused Developer looking to share my passion to the
            world. Join me down and let's collaborate together!. I love to work
            on web apps using technologies like React and Tailwind.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group w-fit px-6 py-3 my-2 flex font-bold
              items-center rounded-md bg-gradient-to-r from-color4
              to-color5 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <TiArrowRightOutline size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile pic"
            className="rounded-full mx-auto w-3/4 border-2 border-color4 shadow-lg hover:shadow-color5 duration-300 md:w-3-4 lg:w-3/5"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
