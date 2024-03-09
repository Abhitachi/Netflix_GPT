import React from "react";
import { bg_url } from "../utils/constant";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="">
      <div className="w-full absolute -z-40">
        <img src={bg_url} alt="" className="h-screen object-cover w-full" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
