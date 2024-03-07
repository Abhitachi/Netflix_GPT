import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 absolute text-white bg-gradient-to-r from-black aspect-video">
      <h1 className="text-2xl">{title}</h1>
      <p className="w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-500 py-4 px-8 text-white mr-2 bg-opacity-50 rounded-md">
          Play Movie
        </button>
        <button className="bg-gray-500 py-4 px-8 text-white bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
