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
        Graduate of computer science with two-years of experience working across the full-stack of 
software development. Looking for a role where I can grow and learn from experienced team 
members while drawing on project experience I have already successfully executed.
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
