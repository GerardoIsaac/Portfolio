import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="min-h-screen w-full flex flex-col justify-center items-center
       bg-gradient-to-b from-color2 via-color1 to-color1 text-slate-200"
    >
      <div
        className="flex flex-col p-8 mt-8 max-w-screen-md 
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
        <p className="text-xl md:mt-12">
          Hey there! ✌ I'm a fervent Frontend developer with a strong
          foundation in HTML, CSS, and JavaScript. I mainly create websites with
          React. I'm excited to continue learning and growing in my career. With
          a passion for creating intuitive and visually appealing web
          applications. Eager to bring my energy and enthusiasm to a dynamic
          team. In addition to my technical skills, I'm a proactive and
          detail-oriented learner with solid communication, problem-solving,
          teamwork, time management, and leadership skills, with ease to adapt
          well to different environments and push myself to overcome
          adversities. I'm always looking for ways to improve my skills and stay
          up to date on the latest technologies and best practices in the field.
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
