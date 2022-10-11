import React from "react";
import { FcSearch } from "react-icons/fc";

const Input = ({ searchTerm }) => {
  return (
    <div className="flex justify-center items-center ">
      <div className="mt-7 flex items-center border-b text-gray-400 focus-within:text-gray-600 ">
        <FcSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
        <input
          placeholder="Enter a Company"
          className="pr-3 pl-10 py-3 sm:w-[25rem]  text-black outline-none rounded-lg focus:bg-slate-200 bg-slate-300 placeholder:text-slate-500"
          onChange={(e) => searchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
