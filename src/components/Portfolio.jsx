import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: installNode,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactParallax,
    },
    {
      id: 5,
      src: reactSmooth,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <section
      name="portfolio"
      className="min-h-screen w-full flex flex-col justify-center items-center
      bg-gradient-to-b from-black to-gray-800
    text-white"
    >
      <div
        className="flex flex-col p-8 mt-8 max-w-screen-md 
        md:mt-0 lg:max-w-4xl xl:max-w-7xl"
      >
        <p className="my-8 max-w-fit text-4xl font-bold inline border-b-4 border-gray-500">
          Portfolio
        </p>
        <p className="text-xl mb-8">Check out some of the work I have done</p>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Individual card */}
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-t-md duration-200 hover:scale-105 
              hover:rounded-b-md"
              />
              <div>
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
