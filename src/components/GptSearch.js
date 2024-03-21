import React from "react";
import { bg_url } from "../utils/constant";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div className="w-full fixed -z-40">
        <img src={bg_url} alt="" className="h-screen object-cover w-full" />
      </div>
      <div className="pt-[10%] md:pt-0">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>

      <div className="flex justify-center align-middle shadow-xl  bg-white px-4 py-6  mt-[10%]">
        <h2 className="text-lg font-extrabold">GPT Query Has Been Disabled Due To Billing Issues 😊:</h2>
      </div>
    </>
  );
};

export default GptSearch;
