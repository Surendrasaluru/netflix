import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");

        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-3 py-2 bg-gradient-to-b from-black-400 z-2 flex justify-between">
      <img
        className=" border border-black rounded-lg w-[135px]  h-[119px] opacity-[0.99]"
        src="https://t3.ftcdn.net/jpg/05/54/84/12/240_F_554841272_8IGhPTbW9vXg9CS5F8YiTYQL68SaC0cg.jpg"
        alt="logo"
      />
      <div className="flex m-3 p-3 ">
        <img
          className="w-[70px] h-12 my-3"
          src="https://t3.ftcdn.net/jpg/05/95/82/78/240_F_595827838_L7GwV4bowXLaP6ZAARRI8K9cVtEkTqTS.jpg"
          alt="usericon"
        />
        <button
          className=" my-4 border border-white rounded-lg h-[35px] bg-red-700 w-[95px] text-white text-sm font-bold"
          onClick={handleSignout}
        >
          Signout
        </button>
      </div>
    </div>
  );
};

export default Header;
