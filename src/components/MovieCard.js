import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-44  hover:scale-110 rounded-md mr-3">
      <img src={IMG_CDN + posterPath} alt="moviecard" />
    </div>
  );
};

export default MovieCard;
