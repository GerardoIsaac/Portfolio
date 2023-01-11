import bookstore from "../assets/portfolio/bookstore.png";
import autoservice from "../assets/portfolio/autoservice.png";
import minecraft from "../assets/portfolio/minecraft.png";
import blog from "../assets/portfolio/blog.png";
import movies from "../assets/portfolio/movies.png";
import landingpage from "../assets/portfolio/landingpage.png";

const Portfolio = () => {
  const projects = [
    {
      id: 6,
      src: landingpage,
      repo: "https://github.com/GerardoIsaac/Landing-page",
    },
    {
      id: 4,
      src: blog,
      repo: "https://github.com/GerardoIsaac/Blog-app",
    },
    {
      id: 1,
      src: bookstore,
      repo: "https://github.com/GerardoIsaac/Book-store",
    },

    {
      id: 3,
      src: minecraft,
      repo: "https://github.com/GerardoIsaac/Minecraft-clone",
      demo: 'https://gerardoisaac.github.io/Minecraft-clone/',
    },

    {
      id: 5,
      src: movies,
      repo: "https://github.com/GerardoIsaac/Movie-search-app",
      demo: 'https://gerardoisaac.github.io/Movie-search-app/',

    },
    {
      id: 2,
      src: autoservice,
      repo: "https://github.com/GerardoIsaac/automotive-site",
      demo: "https://gerardoisaac.github.io/automotive-site/",
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
          {projects.map(({ id, src, demo, repo }) => (
            <div key={id} className="shadow-md shadow-slate-400 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-t-md duration-200 hover:scale-105 
              hover:rounded-b-md"
              />
              <div>
                <a href={demo} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={repo} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
