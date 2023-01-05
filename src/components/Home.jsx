import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { TiArrowRightOutline } from "react-icons/ti";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full flex justify-center items-center bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div
        className="container min-h-screen p-8 mt-8 flex flex-col justify-evenly items-center md:mt-0 md:flex-row md:justify-evenly
        "
      >
        <div className="flex flex-col justify-center h-1/2">
          <h1 className="text-3xl sm:text-7xl text-white">Gerardo Castañeda</h1>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Web Developer
          </h2>
          <p className="text-lg leading-tight text-gray-500 py-4 max-w-md sm:text-xl">
            A Frontend focused Developer looking to share my passion to the
            world. Join me down and let's collaborate together!. I love to work
            on web apps using technologies like React and Tailwind.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex
              items-center rounded-md bg-gradient-to-r from-cyan-500
              to-blue-500 cursor-pointer"
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
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
