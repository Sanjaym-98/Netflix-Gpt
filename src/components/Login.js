import { useState } from "react"
import Header from "./Header"
const Login = () => {
  const [login , setLogin] = useState("Sign In");

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/77c412a9-62ea-48a0-a5ee-466e11e851d5/web/IN-en-20260511-TRIFECTA-perspective_f0af4f75-4cc5-42bd-b0c5-2b65b8b50e03_large.jpg"></img>
      </div>
      <form  className="absolute w-3/12 p-16 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70 rounded-md">  
        <h1 className="font-bold text-3xl py-4">{login == "Sign In"? "Sign In": "Sign Up"}</h1>
        {login==="Sign Up" ? <input  type="text" placeholder="User Name" className="m-2 p-3 w-full bg-gray-800  rounded-md"/>:null}
        <input type="text" placeholder="Email" className="m-2 p-3 w-full bg-gray-800  rounded-md"/>
        <input type="text" placeholder="Password" className="m-2 p-3 w-full bg-gray-800  rounded-md"/>
       <button className="m-2 p-3 bg-red-700  w-full rounded-md">{login == "Sign In" ? "Sign In": "Sign Up"}</button>
       <div className="cursor-pointer" onClick={()=>{
        setLogin(login=="Sign In" ? "Sign Up": "Sign In")
       }}>{login =="Sign In" ? "New User? Sign Up Now!": "Registered User? Sign In"}</div>

      </form>
    </div> 
    
  )
}

export default Login