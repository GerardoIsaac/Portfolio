import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="w-full pt-20 bg-gradient-to-b from-gray-800
      to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
            border-gray-500"
          >
            About
          </p>
        </div>
        <p className="text-xl">
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