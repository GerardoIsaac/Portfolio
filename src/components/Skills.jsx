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
import Nextjs from "../assets/skills/next.svg";
//import Express from "../assets/skills/express.png";
import Typescript from "../assets/skills/typescript.png";

const Skills = () => {
  const skillsset = [
    {
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      src: Css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      src: Javascript,
      title: "JavaScript",
      style: "shadow-yellow-400",
    },
    {
      src: Typescript,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      src: ReactIcon,
      title: "React",
      style: "shadow-sky-600",
    },
    {
      src: Sass,
      title: "Sass",
      style: "shadow-pink-400",
    },
    {
      src: Tailwind,
      title: "TailwindCSS",
      style: "shadow-cyan-500",
    },
    {
      src: Bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-500",
    },
    /* {
      src: JQuery,
      title: "JQuery",
      style: "shadow-blue-500",
    }, */
    {
      src: Redux,
      title: "Redux",
      style: "shadow-violet-600",
    },
    {
      src: Nextjs,
      title: "Next.js",
      style: "shadow-slate-100",
    },
    {
      src: Node,
      title: "Node.js",
      style: "shadow-lime-400",
    },
    /* {
      src: Express,
      title: "Express",
      style: "shadow-zinc-500",
    }, */
    {
      src: MySql,
      title: "MySQL",
      style: "shadow-sky-600",
    },
    {
      src: Git,
      title: "Git",
      style: "shadow-orange-600",
    },
  ];

  return (
    <section name="skills" className="section flex-col">
      <div className="text-start w-full">
        <h3 className="section-title">Skills</h3>
        <p className="text-xl mb-8">
          These are some of the technologies I've worked with
        </p>
      </div>

      {/* Skills Cards */}
      <div
        className=" w-full grid text-center gap-8 
          grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
      >
        {/* Individual Card */}
        {skillsset.map(({ src, title, style, index }) => (
          <div
            key={index}
            className={`shadow-md hover:scale-105 duration-500
            py-2 rounded-lg ${style}`}
          >
            <img
              src={src}
              alt={`${title} logo`}
              logo
              className="w-20 h-20 mx-auto"
            />
            <p className="mt-4">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
