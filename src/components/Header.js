// import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { logo, user_url } from "../utils/constant";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import Error from "./Error";

const Header = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        <Error />;
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: user_url,
          })
        );
        console.log(currentUser);
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={logo} alt="" className="w-48" />
      {currentUser && (
        <div className="p-4 flex gap-6 align-middle">
          <img src={user_url} alt="" className="w-16" />
          <button
            onClick={handleSignOut}
            className="btn text-white font-bold rounded-md px-4 h-10"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
