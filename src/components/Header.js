import { useNavigate } from "react-router-dom"
import auth from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import GptSearch from "./GptSearch";
import {addGptMovieResults, toggleGptSearchView} from '../utils/gptSlice';
import {changeLanguage} from '../utils/configSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const gptSearch = useSelector((store)=>store.gpt.showGptSearch);

 const handleGptSearch=()=>{
  dispatch(toggleGptSearchView())
  dispatch(addGptMovieResults(null))
  }

  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate('/browser')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });

    return ()=>{unsubscribe()}
  }, [])


  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }

  const handleLanguageChange =(e)=>{

    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className="relative">
      <div className="absolute z-10 bg-gradient-to-b from-black w-full flex flex-wrap justify-between items-center gap-2 px-3 py-2 sm:px-6 sm:py-0">

        <img className="w-20 sm:w-32 md:w-44" src={LOGO} alt="Netflix" />

        {user ?
          <div className="flex flex-wrap items-center justify-end gap-1 sm:gap-2 max-w-[70%] sm:max-w-none">
            {gptSearch ? (
              <select
                className="p-1.5 sm:p-2 text-xs sm:text-sm bg-gray-900 text-cyan-50 rounded-md max-w-[5.5rem] sm:max-w-none"
                onChange={(e) => handleLanguageChange(e)}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                ))}
              </select>
            ) : null}
            <button
              className="py-1.5 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm bg-purple-800 rounded-lg text-white whitespace-nowrap"
              onClick={() => handleGptSearch()}
            >
              {gptSearch ? "Home" : "Ask AI ✨"}
            </button>
            <button
              className="font-bold text-white text-xs sm:text-sm py-1 px-1 sm:py-2 sm:px-2 whitespace-nowrap"
              onClick={() => handleSignOut()}
            >
              <span className="hidden sm:inline">{user.displayName ? user.displayName : "UNKNOWN"} </span>
              Sign Out
            </button>
          </div>
          : null}

      </div>
    </div>
  )
}

export default Header