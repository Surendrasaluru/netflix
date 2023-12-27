import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="  pt-[5%] flex justify-center ">
      <form className="w-1/2 grid grid-cols-12 bg-slate-800  ">
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
  );
};

export default GptSearchBar;
