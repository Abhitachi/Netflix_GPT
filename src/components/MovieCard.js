import React from "react";
import { IMG_CDN_URL } from "../utils/constant";
const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-[200px] max-h-[276px] pr-4 overflow-y-hidden">
      <img src={IMG_CDN_URL + posterPath} alt="" className="rounded-md" />
    </div>
  );
};

export default MovieCard;
