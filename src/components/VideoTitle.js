import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black aspect-video">
      <h1 className="text-base md:text-2xl font-bold">{title}</h1>
      <p className="hidden md:inline-block w-2/4 py-4">{overview}</p>
      <div>
        <button className="bg-white py-1 md:py-4 px-2 md:px-8 text-black mr-2  rounded-md">
          ▶️Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 py-4 px-8 text-white bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
