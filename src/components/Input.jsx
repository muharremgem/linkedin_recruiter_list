import React from "react";

const Input = ({ searchTerm }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-7">
        <input
          placeholder="Enter a Company"
          className="px-3 py-3 sm:w-[25rem]  text-black outline-none rounded-lg focus:bg-slate-200 bg-slate-400 placeholder:text-slate-500"
          onChange={(e) => searchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
