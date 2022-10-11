import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <div className="flex  text-white py-5 font-bold bg-blue-500 text-4xl justify-center ">
        <div className="ml-5 ">Linked</div>
        <a href="#">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <div className="flex  justify-center items-center    font-mono bg-blue-500 font-bold text-xl  text-white">
          <a
            className="flex  mx-3 mb-8  hover:-scale-150 "
            href="https://github.com/muharremgem"
            target="_blank"
          >
            <BsGithub />
          </a>

          <h1 className="m-[1rem]">THE WORLD'S BEST COMPANIES 🌍 </h1>

          <h1>TOP 500 LINKEDIN RECRUITER LİSTS</h1>
          <a
            className="flex  mx-8 mb-8 hover:scale-150 duration-500"
            href="https://www.linkedin.com/in/muharremgem/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
