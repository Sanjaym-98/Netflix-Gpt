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
      <div className="absolute z-10 bg-gradient-to-b from-black w-full flex justify-between items-center px-6">

        <img className="w-44" src={LOGO}></img>

        {user ?
          <div>
            {gptSearch ? <select className="p-2 m-2 bg-gray-900 text-cyan-50 rounded-md" onChange={(e) => handleLanguageChange(e)}>
              {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select> : null
            }
            <button className="py-2 px-4 m-2 bg-purple-800 rounded-lg text-white" onClick={() => handleGptSearch()}>{gptSearch ? "Home Page": "Ask AI ✨"}</button>
            <button className="font-bold  text-white" onClick={() => handleSignOut()}>{user.displayName ? user.displayName : "UNKNOWN"} Sign Out</button>
          </div>
          : null}
    
      </div>
    </div>
  )
}

export default Header