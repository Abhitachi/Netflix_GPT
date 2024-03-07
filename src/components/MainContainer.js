import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  console.log("main");
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log(movies);
  if (movies === null) return; //early return
  console.log(movies);
  //   const random = Math.floor(Math.random() * movies.length);
  //   console.log(random);
  const mainMovie = movies[1];
  console.log(mainMovie);
  const { original_title, overview , id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId = {id}/>
    </div>
  );
};

export default MainContainer;
