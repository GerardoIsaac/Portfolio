import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const links = [
    {
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/gerardoisaac/",
    },
    {
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/gerardoisaac/",
    },
    {
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:gerardoisaac.cm@gmail.com",
    },
  ];

  return (
    <section name="contact" className="section flex-col">
      <div className="text-start w-full">
        <h3 className="section-title">Contact</h3>
        <p className="text-xl mb-8">
          Submit the form below to get in touch with me
        </p>
      </div>

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
            hover:scale-110 duration-300 md:text-lg"
        >
          Submit
        </button>
      </form>

      {/* mobile */}
      <div className="mt-12 w-full lg:hidden">
        <ul className="flex justify-evenly">
          {links.map(({ index, child, href }) => (
            <li key={index}>
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
    </section>
  );
};

export default Contact;
