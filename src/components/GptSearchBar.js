import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovies } from "../utils/gptSlice";
import lang from "../utils/languageConstant";
import openAI from "../utils/openAI";
import Error from "./Error";

const GptSearchBar = () => {
  const langSelector = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    return json.results;
  };

  const handleGPTSearch = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation System and Suggest some movies for the query:" +
      searchText.current.value +
      " and return result the names of 10 movies in a comma separated values like the example given ahead : Example Result:Lucia , Babruvahana, Kirik Party, om, KGF ";
    const gptResult = await openAI.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResult.choices) {
      <Error />;
    }
    console.log(gptResult.choices); //return result of string
    const gptMovies = gptResult?.choices?.[0]?.message?.content?.split(","); //converting string res to arr
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie)); //[promise1,promise2,promise3,promise4,promise5]
    const tmdbResult = await Promise.all(promiseArray);
    console.log(tmdbResult);

    dispatch(addGptMovies({ movieNames: gptMovies, movieResults: tmdbResult }));
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="w-full p-2 md:w-1/2 grid grid-cols-12 gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          placeholder={lang[langSelector].gptSearchPlaceHolder}
          className="p-2 col-span-9 rounded-xs"
        />
        <button
          className="p-2 col-span-3 md:col-span-2 bg-red-600 text-white font-lg font-semibold rounded-md"
          onClick={handleGPTSearch}
        >
          {lang[langSelector].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
