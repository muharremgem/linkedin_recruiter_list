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
        <h1 className="flex flex-wrap justify-center items-center font-mono bg-blue-500 font-bold text-2xl  text-green-500">
          TOP 500 LINKEDIN RECRUİTER LİST
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
