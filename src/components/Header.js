import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { USERLOGO, LOGO } from "../utils/constants";
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
  return (
    <div className="  w-screen  h-[100px] px-3 py-2  bg-black bg-gradient-to-b from-black-400 z-2 flex justify-between bg-opacity-90">
      <img
        className=" border border-black rounded-lg w-[105px] h-[89px] opacity-[0.99] "
        src={LOGO}
        alt="logo"
      />
      <div className=" flex justify-between  p-3 ">
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
