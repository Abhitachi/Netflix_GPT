import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addKannadaMovies } from "../utils/movieSlice";

const useKannadaMovies = () => {
  const dispatch = useDispatch();
  const kannadaMovies = useSelector((store) => store.movies.kannadaMovies);
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
    !kannadaMovies && getKannadaMovies();
  }, []);
};

export default useKannadaMovies;
