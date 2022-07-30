import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
// import { bsFillPersonLineFill } from "react-icons/bs";

export const SocialLink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkdin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/ashu20/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/ashutoshvish07",
    },
    {
      id: 3,
      child: (
        <>
          mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ashuvish79@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <FaUserAlt size={30} />
        </>
      ),
      href: "./resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[30%] left-0 fixed">
      <ul>
        {links.map(({id,child,href,style,download}) => (
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target='_blank'
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
