import React from "react";
import { BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="flex  text-white py-2 font-bold bg-blue-500 text-4xl">
      <div className="ml-5 ">Linked</div>
      <a href="#">
        <BsLinkedin />
      </a>
    </div>
  );
};

export default Navbar;
