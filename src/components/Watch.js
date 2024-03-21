import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import useMovieTrailer from "../hooks/useMovieTrailer";

const Watch = () => {
  const { id } = useParams();
  useMovieTrailer(id);
  const movieTrailer = useSelector((store) => store.movies?.trailer);
  console.log(movieTrailer);
  if (!movieTrailer) {
    return (
      <>
        <div className="full-screen-image h-screen flex justify-center blur-sm"></div>
        <div className="absolute top-[45%] bg-white left-[35%] font-extrabold text-xl shadow-lg py-5 px-8 z-40 ">
          <h2>Your Movie Trailer Is Not Found </h2>
          <p className="cursor-pointer">
            Go Back To <Link to="/" className="">Home 🔙</Link>
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      {movieTrailer && (
        <div className="w-screen h-screen mt-0 bg-black">
          <div className="w-full h-full">
            <iframe
              className="h-[416px] md:h-[calc(100%-0px)] w-full pt-[118px] md:pt-[70px]"
              src={`https://www.youtube.com/embed/${movieTrailer.key}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Watch;
