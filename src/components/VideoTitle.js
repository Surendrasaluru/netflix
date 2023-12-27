import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[10%] pl-[5%] w-screen aspect-video  absolute bg-gradient-to-r from-black ">
      <h1 className="font-bold text-3xl text-white">{title}</h1>
      <p className="font-semibold  text-white text-lg py-4 w-2/4 ">
        {overview}
      </p>
      <div>
        <button className="bg-white  mr-3 border w-[140px] hover:bg-opacity-90 h-14 border-black border-solid rounded-lg text-lg font-medium">
          ▶Play
        </button>
        <button className="bg-gray-500  ml-3 border w-[140px] h-14 border-black border-solid rounded-lg text-lg text-white font-medium">
          ⓘ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
