import React from "react";
import GptSearchBar from "./GptSearchBar";
import { NETFLIXBG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-30">
        <img src={NETFLIXBG} alt="signin bg" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearchPage;
