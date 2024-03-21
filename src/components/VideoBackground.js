import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const movieTrailer = useSelector((store) => store.movies?.trailer);
  if (!movieTrailer)
    return (
      <div>
        Back TO <Link to="/">Home</Link>
      </div>
    );
  console.log(movieTrailer);

  return (
    <div className="pt-[10px] md:pt-0  md:w-screen">
      {/* <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/U2Qp5pL3ovA?si=xtEELqpYZtCPi9tK&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe> */}
      <iframe
        src={`https://www.youtube.com/embed/${movieTrailer.key}?&autoplay=1&mute=1&showinfo=0&controls=0&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-screen aspect-video"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
