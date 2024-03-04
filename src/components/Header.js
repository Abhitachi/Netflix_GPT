import React, { useState } from "react";
import { logo } from "../utils/constant";

const Header = () => {
  const [isSignIn, setIsSignin] = useState(false);

  const handleSignIn = () => {
    setIsSignin(!isSignIn);
  };
  return (
    <div className="absolute w-full">
      <div>
        <img src={logo} alt="" className="w-48" />
      </div>
      <div className="m-auto w-6/12 flex flex-col justify-center items-center align-middle ">
        <form className="z-10 flex flex-col justify-center align-middle  text-white items-center gap-5 w-3/4 bg-black  my-20 pt-2 pb-8 px-3 rounded-2xl bg-opacity-80">
          <div className="relative px-4 py-2 w-full my-2">
            <h2 className="text-xl font-extrabold text-white px-4 py-2 mb-2 left-10 top-0  absolute inline-block">
              {isSignIn ? "Sign Up" : "Sign In"}
            </h2>
          </div>
          {isSignIn && (
            <input
              placeholder="Enter Your Full Name"
              type="text"
              className="w-9/12 m-auto px-2 py-2 rounded-md bg-gray-600"
            />
          )}
          <input
            type="text"
            placeholder="Enter Your Email or Phone Numbaer"
            className="w-9/12 m-auto px-2 py-2 rounded-md bg-gray-600"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-9/12 m-auto px-2 py-2 rounded-md bg-gray-600"
          />
          <button className="bg-red-600 py-2 px-4 w-9/12 rounded-md font-bold text-white">
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
          <span className="">
            {" "}
            {isSignIn ? "Already A Member?" : " New To Netflix?"}
            <span onClick={handleSignIn}>
              {isSignIn ? "Sign In" : "Sign Up"} Now
            </span>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Header;
