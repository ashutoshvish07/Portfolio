import React from "react";
import sephora from "../assets/sephora.png";
import Lumen5 from "../assets/Lumen5.png";
import Optimizely from "../assets/Optimizely.png";
import Foodapp from "../assets/Foodapp.png";
import tic_tac from "../assets/tic-tac-toe.png";
const Portfolio = () => {
  const portfoliolinks = [
    {
      id: 1,
      src: sephora,
      title:"Sephora_Clone"
      
    },
    {
      id: 2,
      src: Lumen5,
      title:"Lunmen5_Clone"
    },
    {
      id: 3,
      src: Optimizely,
      title:"Optimizely_Clone"
    },
    {
      id: 4,
      src: Foodapp,
      title:"FoodApp"
    },
    {
      id: 5,
      src: tic_tac,
      title:"Tic-Tac-Toe"
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="bb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 ">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfoliolinks.map(({ id, src ,title}) => (
            <div key={id} className="shadow-md hover:scale-105 duration-500 shadow-gray-600 rounded-lg">
              <img
                className="rounded-md duration-200 hover:scale-100"
                src={src}
                alt=""
              />
              <p className="py-3 px-2 text-2xl text-bold">{title}</p>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
