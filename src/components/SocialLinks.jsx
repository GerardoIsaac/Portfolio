import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
/* import { BsFillPersonLinesFill } from "react-icons/bs";
 */
const SocialLinks = () => {
  const links = [
    {
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/gerardoisaac/",
      style: "rounded-tr-md",
    },
    {
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/gerardoisaac/",
    },
    {
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:gerardoisaac.cm@gmail.com",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden top-[41%] left-0 fixed lg:flex lg:flex-col">
      <ul>
        {links.map(({ index, child, href, style }) => (
          <li
            key={index}
            className={`flex justify-between items-center w-40 h-14 px-4 
            ml-[-100px] hover:ml-[-10px] hover:rounded-md ease-in duration-300 
            bg-color1 hover:bg-color2 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full
              text-slate-400 hover:text-slate-100"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
