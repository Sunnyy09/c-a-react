import React from "react";

function Card({ userName, paraText }) {
  return (
    <div className="max-w-xs mb-10 p-6 rounded-md shadow-md bg-black">
      <img
        src="../public/pexels-fidan-nazim-qizi-134456769-29251701.jpg"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          {userName}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">{paraText}</h2>
      </div>
      <p className="text-gray-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        tempora ipsum soluta amet
      </p>
    </div>
  );
}

export default Card;
