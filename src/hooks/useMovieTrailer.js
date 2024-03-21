import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailer } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  
  const movieTrailer = useSelector((store) => store?.movies?.addTrailer);
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const filterData = json.results?.filter((item) => item?.type === "Trailer");
    const trailer = filterData?.length ? filterData[0] : json.results[0];
    dispatch(addTrailer(trailer));
    console.log(filterData);
  };

  useEffect(() => {
    !movieTrailer && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
