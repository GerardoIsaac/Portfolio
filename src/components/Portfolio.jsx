import promptopia from "../assets/portfolio/promptopia.png";
import minecraft from "../assets/portfolio/minecraft.png";
//import blog from "../assets/portfolio/blog.png";
import hilink from "../assets/portfolio/hilink.png";
import landingpage from "../assets/portfolio/landingpage.png";
import codex from "../assets/portfolio/codex.png";
import carsapp from "../assets/portfolio/carsapp.png";
import { FaGithub } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const Portfolio = () => {
  const projects = [
    {
      src: promptopia,
      title: "Promptopia",
      tools: "Next.js, Tailwind, MongoDB, Mongoose",
      repo: "https://github.com/GerardoIsaac/AI-prompts-app",
      demo: "https://ai-prompts-app-gerardoisaac.vercel.app/",
    },
    {
      src: carsapp,
      title: "Car rental app",
      tools: "Typescript, React, Next.js, Tailwind",
      repo: "https://github.com/GerardoIsaac/car-showcase-app",
      demo: "https://car-showcase-app-nu.vercel.app/",
    },
    {
      src: codex,
      title: "Codex",
      tools: "JavaScript, Node.js, Express, CSS, OpenAI",
      repo: "https://github.com/GerardoIsaac/OpenAI-chatbot",
      demo: "https://open-ai-chatbot-gerardoisaac.vercel.app/",
    },
    {
      src: landingpage,
      title: "Mockup landing page",
      tools: "HTML, JavaScript, Tailwind",
      repo: "https://github.com/GerardoIsaac/Landing-page",
      demo: "https://gerardoisaac.github.io/Landing-page/",
    },
    {
      src: hilink,
      title: "Camping app landpage",
      tools: "Typescript, Next.js, Tailwind",
      repo: "https://github.com/GerardoIsaac/Camp-Traveler-App",
      demo: "https://camptraveling.netlify.app/",
    },
    {
      src: minecraft,
      title: "Minecraft clone",
      tools: "React, CSS, Three.js",
      repo: "https://github.com/GerardoIsaac/Minecraft-clone",
      demo: "https://gerardoisaac.github.io/Minecraft-clone/",
    },
    /* {
      src: blog,
      title: "Blog CRUD app",
      tools: "React, Sass, Node.js, Express, MySQL",
      repo: "https://github.com/GerardoIsaac/Blog-app",
      demo: "",
    }, */
  ];

  return (
    <section name="portfolio" className="section flex-col">
      <div className="text-start w-full">
        <h3 className="section-title">Portfolio</h3>
        <p className="text-xl mb-8">Check out some of the work I have done</p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Individual card */}
        {projects.map(({ src, title, tools, repo, demo }) => (
          <div
            key={title}
            className="shadow-md shadow-slate-400 rounded-lg group"
          >
            <img
              src={src}
              alt=""
              className="rounded-t-md duration-200 ease-in hover:scale-105 
              hover:rounded-b-md"
            />
            {/* Card info */}
            <div className="text-center h-[100px] group">
              {/* Name and techs */}
              <div className="group-hover:hidden">
                <p className="text-md sm:text-lg pt-2">{title}</p>
                <div className="w-1/4 border-b-2 border-slate-400 mx-auto pt-1"></div>
                <p className="py-4 text-sm sm:text-base">{tools}</p>
              </div>

              {/* Live demo and repo buttons */}
              <div className="hidden h-full group-hover:block text-lg">
                {/* //todo: remover botones dentro de anchors, un elemento interactivo no puede estar dentro de otro elemento interactivo */}
                {demo && (
                  <a href={demo} target="_blank" rel="noreferrer">
                    <button className="w-1/2 mx-auto h-3/5 border-r-2 border-slate-400 hover:text-white">
                      <HiOutlineGlobeAlt size={30} className="inline-block" />{" "}
                      Watch live
                    </button>
                  </a>
                )}
                <a href={repo} target="_blank" rel="noreferrer">
                  <button className="w-1/2 mx-auto h-full hover:text-white">
                    <FaGithub size={30} className="inline-block" /> Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
