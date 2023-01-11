import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/gerardoisaac/",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/gerardoisaac/",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30}/>
        </>
      ),
      href: "mailto:gerardoisaac.cm@gmail.com",
    },
  ];

  return (
    <section
      name="contact"
      className="min-h-screen w-full flex justify-center items-center
      bg-gradient-to-b from-color1 via-color1 to-color2
    text-slate-200"
    >
      <div
        className="max-w-screen-md mt-4 p-8 flex flex-col
        justify-center w-full lg:max-w-4xl xl:max-w-7xl"
      >
        <p
          className="my-8 max-w-fit text-4xl font-bold inline border-b-4
          border-slate-500"
        >
          Contact
        </p>
        <p className="text-xl mb-8">
          Submit the form below to get in touch with me
        </p>

        <form
          action="https://getform.io/f/07d131e4-5d95-43dc-956b-46db1870b544"
          method="POST"
          className="mx-auto flex flex-col w-full space-y-4 text-white
          md:space-y-8"
        >
          <input
            required
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 bg-transparent border-2 border-color3 rounded-md
            focus:outline-none md:p-4"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Enter your email"
            className="p-2 bg-transparent border-2 border-color3 rounded-md
            focus:outline-none md:p-4"
          />
          <textarea
            required
            name="message"
            placeholder="Type a message"
            rows="8"
            className="pt-2 pl-2 bg-transparent border-2 border-color3 rounded-md
              focus:outline-none md:p-4"
          ></textarea>
          <button
            className="font-bold bg-gradient-to-b from-color4
            to-color5 px-6 py-3 mx-auto rounded-md
            hover:scale-110 duration-300 md:text-xl sm:px-12 sm:py-5"
          >
            Submit
          </button>
        </form>

        {/* mobile */}
        <div className='mt-12 lg:hidden'>
          <ul className="flex w-full justify-evenly">
            {links.map(({ id, child, href, style }) => (
              <li key={id}>
                <a
                  href={href}
                  className="text-color3"
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
