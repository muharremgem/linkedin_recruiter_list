import React from "react";
import { BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <div className="flex  text-white py-2 font-bold bg-blue-500 text-4xl">
        <div className="ml-5 ">Linked</div>
        <a href="#">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <div className="flex flex-wrap justify-center items-center font-mono bg-blue-500 font-bold text-2xl  text-white">
          <h1 className="mb-[5rem]">THE WORLD'S BEST COMPANIES</h1>
          TOP 500 LINKEDIN RECRUİTER LİST
        </div>
      </div>
    </div>
  );
};

export default Navbar;
