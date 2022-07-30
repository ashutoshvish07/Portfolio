import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello! My name is Ashutosh Vishwakarma and I enjoy creating things
          that live on internet. I'm a passionate Developer, administrative and
          communication skill,good attention to detail and the ability to write
          efficient code using ReactJS
        </p>
        <br />

        <p className="text-xl">
          As I grow and flourish as a Developer, one thing which keeps me going
          is my inquisitiveness for discovering new things every day. Fast
          Forwarding to today , I have build number of web application and 3
          major project. Learned a great deal bout teamwork ,leadership and
          communication.After months of rigorous traning ,here i am looking for
          an opportunity as a React Developer{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
