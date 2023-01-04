import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { TiArrowRightOutline } from "react-icons/ti";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center 
        justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold text-white sm:text-7xl">
            Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            A Frontend focused Developer looking to share my passion to the
            world. Join me down and let's collaborate together!. I love to work
            on web apps using technologies like React and Tailwind.
          </p>
          <div>
            <button
              className="group text-white w-fit px-6 py-3 my-2 flex
              items-center rounded-md bg-gradient-to-r from-cyan-500
              to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <TiArrowRightOutline size={25} className='ml-1' />
              </span>
            </button>
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
