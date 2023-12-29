import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { USERLOGO, LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
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
  const dispatch = useDispatch();
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className="  w-screen  h-[100px] px-3 py-2   sm:bg-white md:bg-black bg-gradient-to-b from-black-400 z-2 flex flex-col md:flex-row justify-between bg-opacity-90">
      <img
        className=" border border-black rounded-lg md:mx-0 mx-auto w-[125px] h-[95px] opacity-[0.99] "
        src={LOGO}
        alt="logo"
      />

      <div className=" flex justify-between  p-3 ">
        {showGptSearch && (
          <select
            className="my-2  mx-8 px-4 border cursor-default border-black rounded-lg h-[35px] bg-purple-400 w-[105px] text-white text-sm font-semibold"
            onChange={handleLangChange}
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="te">Telugu</option>
          </select>
        )}
        <button
          className="my-2  px-4 border cursor-pointer border-black rounded-lg h-[35px] bg-green-700 w-[95px] text-white text-sm font-bold"
          onClick={handleGptSearch}
        >
          {showGptSearch ? "Home🏠" : "Ai Search"}
        </button>
        <img className="w-[70px] h-12 my-2" src={USERLOGO} alt="usericon" />
        <button
          className="my-2 border cursor-pointer border-white rounded-lg h-[35px] bg-red-700 w-[95px] text-white text-sm font-bold"
          onClick={handleSignout}
        >
          Signout
        </button>
      </div>
    </div>
  );
};

export default Header;
