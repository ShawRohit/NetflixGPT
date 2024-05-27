// RAFCE - > React Arrow Function Component Export
import { useState, useRef } from "react";

import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toogleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    //Validate form data
    const isValid = checkValidData(email.current.value, password.current.value);
    if (isValid != null) {
      setErrorMessage(isValid);
    } else {
      setErrorMessage(null);
    }

    //SignIn and SignUp
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="./../assets/bg-image.jpg" alt="logo" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 my-36 mx-auto right-0 left-0  w-3/12 bg-black text-white bg-opacity-80 h-2/3"
      >
        <h1 className="font-bold font-3xl py-4 text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 my-6 w-full bg-gray-700"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-6 w-full bg-gray-700"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-6 w-full bg-gray-700"
          ref={password}
        />
        <p className="text-red-800 font-bold">{errorMessage}</p>
        <button
          type="button"
          className="p-2 my-6  bg-red-700 w-full rounded-sm"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {/* <h2 className="text-center">Forgot password ?</h2> */}
        <p className="p-2 m-2 hover:cursor-pointer" onClick={toogleSignInForm}>
          {isSignIn
            ? " New to Netflix ? Sign up now"
            : "Already Registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
