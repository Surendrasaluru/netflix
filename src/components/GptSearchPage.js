import React from "react";
import GptSearchBar from "./GptSearchBar";
import { NETFLIXBG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="absolute -z-30">
        <img src={NETFLIXBG} alt="signin bg" />
      </div>
      <div className="pt-[15%] md:pt-0">
        <GptSearchBar />
      </div>
    </>
  );
};

export default GptSearchPage;
