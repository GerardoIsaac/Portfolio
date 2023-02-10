import bookstore from "../assets/portfolio/bookstore.png";
import minecraft from "../assets/portfolio/minecraft.png";
import blog from "../assets/portfolio/blog.png";
import movies from "../assets/portfolio/movies.png";
import landingpage from "../assets/portfolio/landingpage.png";
import sonical from "../assets/portfolio/sonical.png";
import { FaGithub } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const Portfolio = () => {
  const projects = [
    {
      id: 6,
      src: landingpage,
      title: "Mockup landing page",
      tools: "React, Tailwind",
      repo: "https://github.com/GerardoIsaac/Landing-page",
      demo: "",
    },
    {
      id: 4,
      src: blog,
      title: "Blog CRUD app",
      tools: "React, CSS, Node.js, Express, MySQL",
      repo: "https://github.com/GerardoIsaac/Blog-app",
      demo: "",
    },
    {
      id: 1,
      src: bookstore,
      title: "Bookstore CRUD app",
      tools: "React, CSS, Node.js, Express, MySQL",
      repo: "https://github.com/GerardoIsaac/Book-store",
      demo: "",
    },

    {
      id: 3,
      src: minecraft,
      title: "Minecraft clone",
      tools: "React, CSS, Three.js",
      repo: "https://github.com/GerardoIsaac/Minecraft-clone",
      demo: "https://gerardoisaac.github.io/Minecraft-clone/",
    },

    {
      id: 5,
      src: movies,
      title: "Movie searching app",
      tools: "React, CSS",
      repo: "https://github.com/GerardoIsaac/Movie_search_app",
      demo: "https://gerardoisaac.github.io/Movie_search_app/",
    },
    {
      id: 7,
      src: sonical,
      title: "Sonical landing page",
      tools: "HTML, Bootstrap, CSS",
      repo: "https://github.com/GerardoIsaac/Sonical-landing-page",
      demo: "https://gerardoisaac.github.io/Sonical-landing-page/",
    },
  ];

  return (
    <section
      name="portfolio"
      className="min-h-screen w-full flex flex-col justify-center items-center
      bg-gradient-to-b from-color1 via-color1 to-color2
    text-slate-200"
    >
      <div
        className="flex flex-col p-8 mt-8 max-w-screen-md 
        lg:max-w-4xl xl:max-w-7xl"
      >
        <p className="my-8 max-w-fit text-4xl font-bold inline border-b-4 border-slate-500">
          Portfolio
        </p>
        <p className="text-xl mb-8">Check out some of the work I have done</p>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Individual card */}
          {projects.map(({ id, src, title, tools, repo, demo }) => (
            <div
              key={id}
              className="shadow-md shadow-slate-400 rounded-lg group"
            >
              <img
                src={src}
                alt=""
                className="rounded-t-md duration-200 hover:scale-105 
              hover:rounded-b-md"
              />
              {/* Card info */}
              <div className="text-center h-[100px] group">
                {/* Name and techs */}
                <div className="group-hover:hidden">
                  <p className="text-lg pt-2">{title}</p>
                  <div className="w-1/4 border-b-2 border-slate-400 mx-auto pt-1"></div>
                  <p className="py-4">{tools}</p>
                </div>

                {/* Live demo and repo buttons */}
                <div className="hidden h-full group-hover:block text-lg">
                  <a href={demo} target="_blank" rel="noreferrer">
                    <button className="w-1/2 mx-auto h-3/5 border-r-2 border-slate-400 hover:text-white">
                      <HiOutlineGlobeAlt size={30} className='inline-block' /> Watch live
                    </button>
                  </a>
                  <a href={repo} target="_blank" rel="noreferrer">
                  
                    <button className="w-1/2 mx-auto h-full hover:text-white">
                    <FaGithub size={30} className='inline-block' /> Code 
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
