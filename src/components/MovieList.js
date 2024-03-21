import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  return (
    <div className="px-6">
      <h1 className="text-lg md:text-xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {movies?.map((movie) => (
            <Link to={`/watch/${movie.id}`}>
              <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
