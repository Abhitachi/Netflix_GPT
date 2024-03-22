// import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/Firebase";
import { changeLanguage } from "../utils/configSlice";
import { SUPPORTED_LANGUAGES, logo, user_url } from "../utils/constant";
import { toggleGPTSearch } from "../utils/gptSlice";
import { addUser, removeUser } from "../utils/userSlice";
import Accordion from "./Accordion";
import Error from "./Error";

const Header = () => {
  const [showAccordion, setShowAccordion] = useState(false);
  const navigate = useNavigate();
  const currentUser = useSelector((store) => store.user);

  const showGPTSearch = useSelector((store) => store.gpt.gptSearch);

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

  const handleClick = () => {
    setShowAccordion(!showAccordion);
  };

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, displayName, email } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
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
    <div className="absolute w-screen h-[50px] md:h-auto px-2 md:px-8 py-0 md:py-2 bg-gradient-to-b from-black z-10 flex  flex-row md:flex-row justify-between">
      <img src={logo} alt="" className="w-24 md:w-48 mx-[10px] md:mx-0" />
      {currentUser && (
        <div className="p-2 md:p-4 flex gap-2 md:gap-6 align-middle">
          <div className="p-0 md:p-2">
            {showGPTSearch && (
              <select
                className="text-white bg-gray-500 p-2 rounded-md"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((language) => (
                  <option
                    value={language.identifier}
                    key={language.identifier}
                    className="text-white font-medium text-lg"
                  >
                    {language.name}
                  </option>
                ))}
              </select>
            )}
          </div>
          <button
            className="text-xs md:text-xl bg-red-600 font-semibold  text-white px-1 md:px-3 py-1 rounded-md "
            onClick={handleGPTSearch}
          >
            GptSearch
          </button>
          <img
            src={user_url}
            alt=""
            className="w-8 md:w-12 cursor-pointer"
            onClick={handleClick}
          />
          {showAccordion && (
            <div className="absolute mt-14 rounded-md right-4 ">
              <Accordion onSignOut={handleSignOut} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
