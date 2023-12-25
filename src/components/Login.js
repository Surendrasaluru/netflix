import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [signin, setSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const toggleSignin = () => {
    setSignin(!signin);
  };
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validation of form data
    //checkValidData(email, password);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message === null) {
      //signin or signup logic
      if (!signin) {
        //signup logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + "--" + errorMessage);
          });
      } else {
        //signinlogic
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/browse");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "--" + errorMessage);
          });
      }
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="signin bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute rounded-lg p-16 w-1/4 bg-black bg-opacity-70 my-36 mx-auto right-0 left-0 text-white"
      >
        <h1 className="font-bold text-3xl py-3 px-1 mx-2 my-1">
          {signin ? "Sign in" : "Sign up"}
        </h1>
        {!signin && (
          <input
            type="text"
            placeholder="Your Good Name..."
            className="p-3 my-3 rounded-lg mx-auto right-0 left-0 w-full bg-gray-600 placeholder-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-3 my-3 rounded-lg mx-auto right-0 left-0 w-full bg-gray-600 placeholder-white"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 rounded-lg mx-auto right-0 left-0 w-full  bg-gray-600 placeholder-white "
        />

        <p className="text-red-500  text-md font-medium my-1">{errorMessage}</p>
        <button
          className="p-3 my-6 mb-2 bg-red-600 w-full rounded-lg font-bold"
          onClick={handleButtonClick}
        >
          {signin ? "Sign in" : "Sign up"}
        </button>

        <input type="checkbox" id="remember" />
        <label for="remember" className="text-gray-200">
          Remember me
        </label>

        <p className="text-gray-200 my-2">
          {signin ? "New to Netflix ? " : "Already existing User ? "}
          <span
            onClick={toggleSignin}
            className="font-bold cursor-pointer underline"
          >
            {signin ? "Sign up now" : "Sign in"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
