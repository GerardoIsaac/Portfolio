import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactIcon from "../assets/react.png";
import Nextjs from "../assets/nextjs.png";
import Graphql from "../assets/graphql.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";

const Exerience = () => {
  const skills = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactIcon,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: Nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: Graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: Github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b
    from-gray-800 to-black w-full"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-white"
      >
        <div>
          <p
            className="text-4xl font-bold border-b-4
          border-gray-500 p-2 inline"
          >
            Exerience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        {/* Skills Cards */}
        <div
          className=" w-full grid text-center gap-8 px-12 
          sm:px-0 grid-cols-2 md:grid-cols-3"
        >
          {/* Individual Card */}
          {skills.map(({ id, src, title, style }) => (
            <div
              id={id}
              className={`shadow-md hover:scale-105 duration-500
            py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exerience;
