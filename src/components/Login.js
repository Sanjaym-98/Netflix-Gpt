import { useState,useRef} from "react"
import Header from "./Header";
import validateInput from "../utils/validate";
import auth from '../utils/firebase';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { BACKGROUND_IMG } from "../utils/constants";

const Login = () => {
  const [login , setLogin] = useState("Sign In");
  const [errMessage,setErrMessage]= useState(null)
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null)
  const navigate = useNavigate()

  const handleButtonClick = () => {
  const message = validateInput(email?.current?.value, password?.current?.value, userName?.current?.value);
  setErrMessage(message);
  if (message) return;

  if (login !== "Sign In") {
    // Sign Up
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        if (userName?.current?.value) {
          return updateProfile(user, { displayName: userName.current.value });
        }
      })
      .then(() => {        navigate('/browser')
})
      .catch((error) => setErrMessage(error.message));
  } else {
    // Sign In
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then(() => {navigate('/browser') })
      .catch((error) =>{console.log("err",error);  setErrMessage(error.message)});
  }
};

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMG}></img>
      </div>
      <form  key={login } onSubmit={(e) => { e.preventDefault() }} className="absolute w-3/12 p-16 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70 rounded-md">
        <h1 className="font-bold text-3xl py-4">{login == "Sign In" ? "Sign In" : "Sign Up"}</h1>
        {login === "Sign Up" ? <input type="text" ref={userName} placeholder="User Name" className="m-2 p-3 w-full bg-gray-800  rounded-md" /> : null}
        <input type="text" ref={email} placeholder="Email" className="m-2 p-3 w-full bg-gray-800  rounded-md" />
        <input type="password" ref={password} placeholder="Password" className="m-2 p-3 w-full bg-gray-800  rounded-md" />
        <p className="font-bold text-lg p-2 text-red-700">{errMessage}</p>
        <button className="m-2 p-3 bg-red-700  w-full rounded-md" onClick={() => { handleButtonClick() }}>{login == "Sign In" ? "Sign In" : "Sign Up"}</button>
        <div className="cursor-pointer" onClick={() => {
          setLogin(login == "Sign In" ? "Sign Up" : "Sign In" )
          setErrMessage(null)
        }}>{login == "Sign In" ? "New User? Sign Up Now!" : "Registered User? Sign In"}</div>

      </form>
    </div> 
    
  )
}

export default Login