import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
  const langSelector = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[20%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12 gap-2">
        <input
          type="text"
          placeholder={lang[langSelector].gptSearchPlaceHolder}
          className="p-2 col-span-10 rounded-xs"
        />
        <button className="p-2 col-span-2 bg-red-600 text-white font-lg font-semibold rounded-md">
          {lang[langSelector].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
