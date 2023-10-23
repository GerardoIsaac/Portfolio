import React from "react";
import Html from "../assets/skills/html.png";
import Css from "../assets/skills/css.png";
import Javascript from "../assets/skills/javascript.png";
import ReactIcon from "../assets/skills/react.png";
import Bootstrap from "../assets/skills/bootstrap.svg";
import Tailwind from "../assets/skills/tailwind.png";
import Sass from "../assets/skills/sass.svg";
import Redux from "../assets/skills/redux.svg";
//import JQuery from "../assets/skills/jquery.svg";
import Node from "../assets/skills/node.png";
import MySql from "../assets/skills/mysql.svg";
import Git from "../assets/skills/git.svg";
import Nextjs from "../assets/skills/nextjs.png";
//import Express from "../assets/skills/express.png"; 

const Skills = () => {
  const skillsset = [
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
      id: 8,
      src: Sass,
      title: "Sass",
      style: "shadow-pink-300",
    },
    {
      id: 5,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: Bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-500",
    },
    /* {
      id: 14,
      src: JQuery,
      title: "JQuery",
      style: "shadow-blue-500",
    }, */
    {
      id: 9,
      src: Redux,
      title: "Redux",
      style: "shadow-violet-600",
    },
    {
      id: 6,
      src: Nextjs,
      title: "Next.js",
      style: "shadow-white",
    },
    {
      id: 10,
      src: Node,
      title: "Node.js",
      style: "shadow-lime-400",
    },
    /* {
      id: 11,
      src: Express,
      title: "Express",
      style: "shadow-zinc-500",
    }, */
    {
      id: 12,
      src: MySql,
      title: "MySQL",
      style: "shadow-sky-600",
    },
    {
      id: 13,
      src: Git,
      title: "Git",
      style: "shadow-orange-600",
    },
  ];
  
  return (
    <section
      name="skills"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b
    from-color2 via-color1 to-color1 text-slate-200"
    >
      <div
        className="max-w-screen-md mx-auto p-8 mt-8 flex flex-col
        justify-center w-full lg:max-w-4xl xl:max-w-7xl"
      >
          <p
            className="my-8 max-w-fit text-4xl font-bold border-b-4
          border-slate-500 inline"
          >
            Skills
          </p>
          <p className="text-xl mb-8">These are the technologies I've worked with</p>

        {/* Skills Cards */}
        <div
          className=" w-full grid text-center gap-8 
          grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
        >
          {/* Individual Card */}
          {skillsset.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500
            py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 h-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;