import React, { useRef, useState } from "react";
import { bg_url } from "../utils/constant";
import Header from "./Header";
import validate from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonSignIn = () => {
    const error = validate(email.current.value, password.current.value);
    setErrorMessage(error);
    if (error) return; //if there is an error return;

    if (!isSignIn) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, displayName, email } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          let errorMessage = null;
          switch (error.code) {
            case "auth/user-disabled":
              errorMessage = "Your account has been disabled!";
              break;

            case "auth/invalid-login-credentials":
              errorMessage = "Invalid login credentials.";
              break;

            default:
              errorMessage = "Something went wrong with your credentials.";
              break;
          }
          setErrorMessage(errorMessage);
        });
    }
  };

  const handleSignIn = () => {
    setIsSignin(!isSignIn);
  };

  return (
    <div className="">
      <Header />
      <div className="w-full absolute">
        <img src={bg_url} alt="" className="h-screen object-cover w-full" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="z-10  m-auto  absolute right-0 left-0 py-3  flex flex-col gap-2  text-white items-center w-3/12 bg-black  my-36 pt-2 pb-8 px-6 rounded-2xl bg-opacity-80"
      >
        <div className="relative  mt-2 px-2 py-2 w-full text-xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </div>
        {!isSignIn && (
          <input
            placeholder="Enter Your Full Name"
            type="text"
            ref={name}
            className="w-full m-auto pl-2 py-2 my-2 text-left text-sm rounded-md bg-gray-600"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Enter Your Email or Phone Number"
          className="w-full text-left text-sm m-auto  pl-2 my-2 py-2 rounded-md bg-gray-600 "
        />
        <input
          type="password"
          ref={password}
          placeholder="Enter Your Password"
          className="w-full m-auto text-sm pl-2 my-2 py-2 rounded-md bg-gray-600"
        />
        <span className="w-full text-red-600 font-semibold">
          {errorMessage}
        </span>
        <button
          onClick={handleButtonSignIn}
          className="bg-red-600 py-2 mb-2 px-4 w-full rounded-md font-bold text-white"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p>
          {" "}
          <span className="text-gray-400">
            {" "}
            {isSignIn ? " New To Netflix?" : "Already A Member?"}{" "}
          </span>
          <span onClick={handleSignIn} className="cursor-pointer">
            {isSignIn ? "Sign Up" : "Sign In"} Now
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
