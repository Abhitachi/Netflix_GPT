import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addKannadaMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useKannadaMovies = () => {
  const dispatch = useDispatch();
  const getKannadaMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=0ff3b2de659c8800033a8cc984a45257&with_original_language=kn",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addKannadaMovies(json.results));
  };
  useEffect(() => {
    getKannadaMovies();
  }, []);
};

export default useKannadaMovies;
