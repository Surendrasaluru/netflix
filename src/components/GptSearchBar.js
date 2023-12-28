import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div>
      <div className="  pt-[5%] flex justify-center ">
        <form
          className="w-1/2 grid grid-cols-12 bg-slate-800  "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
            className=" p-3 m-3 col-span-9 border border-solid border-black  rounded-xl placeholder-zinc-700 "
          />
          <button className="bg-red-800 m-4 py-2 px-4 col-span-3 border border-solid border-white rounded-xl text-white font-semibold">
            {lang[langKey].search}🚀
          </button>
        </form>
      </div>
      <div className="flex justify-center mt-5">
        <img
          src="https://img.freepik.com/free-vector/coming-soon-banner-with-focus-lights_1017-33739.jpg?size=626&ext=jpg&ga=GA1.1.1201359665.1699006875&semt=ais"
          alt="cmngsoon"
          className="w-[300px]"
        />
      </div>
      <div className="flex justify-center mt-5">
        <h2 className="bg-white text-lg font-bold p-5 text-center w-[800px]">
          This Feature allows you to get MovieSuggestions from AI and it is
          under testing phase and accesible only to beta users and will be
          available to alll sooon.....
        </h2>
      </div>
    </div>
  );
};

export default GptSearchBar;
