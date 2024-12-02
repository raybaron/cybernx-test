import React from "react";

const Switch = ({ checked, onCheckedChange }) => {
  return (
    <div
      className={`relative w-10 h-5 flex items-center cursor-pointer ${
        checked ? "bg-blue-500" : "bg-gray-300"
      } rounded-full transition-colors duration-300`}
      onClick={() => onCheckedChange(!checked)}
    >
      <div
        className={`absolute w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ${
          checked ? "translate-x-5" : "translate-x-1"
        }`}
      ></div>
    </div>
  );
};

export { Switch };
