import React from "react";
import profile from "../assets/Profile.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll"
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a React Developer,
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            Currently I'm learning Full Stack Development, I love to work on web
            Application using technologies like JavaScript , React, Tailwind .
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white text-lg w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            className="rounded-full mx-auto w-2/3 md:w-full "
            src={profile}
            alt="myprofile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
