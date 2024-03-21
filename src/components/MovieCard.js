import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IMG_CDN_URL } from "../utils/constant";
const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div
      className=" w-36 md:w-[200px] max-h-[276px] pr-4 overflow-y-hidden hover:scale-110 hover:transition-transform"
      style={{ transition: "0.9s" }}
    >
      <LazyLoadImage
        src={IMG_CDN_URL + posterPath}
        alt=""
        className="rounded-md"
      />
    </div>
  );
};

export default MovieCard;
