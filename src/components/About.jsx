import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="min-h-screen w-full flex flex-col justify-center items-center
       bg-gradient-to-b from-color2 via-color1 to-color1 text-slate-200"
    >
      <div className="flex flex-col p-8 mt-8 max-w-screen-md 
      sm:mt-0 lg:max-w-4xl xl:max-w-7xl">
        <div className="py-8">
          <p
            className="text-4xl font-bold inline border-b-4
            border-slate-500"
          >
            About
          </p>
        </div>
        <p className="text-xl md:mt-12">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          vero at perspiciatis beatae, atque dolore nulla iusto! Quae, cum
          facere! Quas a modi nesciunt quasi necessitatibus fugit nobis sint,
          quam totam facilis quae? A reiciendis quam natus placeat repellat
          fugit sed expedita. Hic placeat similique porro rerum saepe error qui.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, cumque
          perferendis. Distinctio nostrum culpa quis, voluptatibus, officia
          perferendis asperiores cum provident reiciendis animi obcaecati,
          libero quos dolor temporibus eligendi rem minus! Aliquam maiores
          aperiam deleniti sequi impedit ab perferendis numquam est dolores illo
          optio unde voluptas nesciunt, omnis sint cum.
        </p>
      </div>
    </section>
  );
};

export default About;
