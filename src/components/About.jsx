import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="min-h-screen w-full flex flex-col justify-center items-center
       bg-gradient-to-b from-color2 via-color1 to-color1 text-slate-200"
    >
      <div
        className="flex flex-col p-8 mt-8 max-w-screen-md text-xl 
      sm:mt-0 lg:max-w-4xl xl:max-w-7xl"
      >
        <div className="py-8">
          <p
            className="text-4xl font-bold inline border-b-4
            border-slate-500"
          >
            About
          </p>
        </div>
        <p className="md:mt-12">
          I'm a passionate Frontend developer with a strong foundation in{" "}
          <span className="text-color3 font-bold">HTML</span>,
          <span className="text-color3 font-bold"> CSS</span>, and{" "}
          <span className="text-color3 font-bold">JavaScript</span>. I mainly
          create websites with{" "}
          <span className="text-color3 font-bold">React</span> and{" "}
          <span className="text-color3 font-bold">Tailwind</span> but have
          worked with technologies like{" "}
          <span className="text-color3 font-bold">Sass</span>,{" "}
          <span className="text-color3 font-bold">Bootstrap</span>, and{" "}
          <span className="text-color3 font-bold">JQuery</span>. I also have
          basic knowledge of backend technologies like{" "}
          <span className="text-color3 font-bold">Node.js</span>,{" "}
          <span className="text-color3 font-bold">Express</span>, and{" "}
          <span className="text-color3 font-bold">MySQL</span> as databases.
        </p>
        <br />
        <p>
          I'm a proactive and detail-oriented learner with solid communication,
          problem-solving, teamwork, time management, and leadership skills.
          With ease to adapt well to different environments and push me to
          overcome adversities.
        </p>
        <br />
        <p>
          I love music, so I compose and produce songs in my free time or enjoy
          playing guitar or keys. I take pleasure in a good book with a coffee
          cup. I like to read about topics that help me to grow, so psychology,
          personal finances, or interpersonal and intrapersonal skills books are
          my go-to choices.
        </p>
      </div>
    </section>
  );
};

export default About;
