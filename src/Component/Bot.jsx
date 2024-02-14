import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Bot = ({ handler }) => {
  return (
    <div
      onClick={handler}
      className="cursor-pointer text-white fixed bottom-10 right-10 bg-sky-600 animate-bounce h-16 w-16 rounded-full text-center pl-2 pt-2 transform duration-200 ease-in-out">
      <FaAngleDown id="bot" className="text-5xl ease-in-out duration-300" />
    </div>
  );
};

export default Bot;
