import { validate1} from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/UserSlice";
import { useNavigate } from "react-router-dom";
import { BG_URL } from "../utils/Constants";
const Login=()=>{
    const[isSignin,setisSignin]=useState(true);
    const [errmsg,seterrmsg]=useState(null)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const emailvar=useRef(null);
    const uservar=useRef(null);
    const passvar=useRef(null);
    const handlesignup=()=>{
setisSignin(!isSignin);
    }
    const handlevalidation=()=>{

      const message=validate1(emailvar.current.value,passvar.current.value);
      seterrmsg(message);
      if(message) return;
    if(isSignin){
signInWithEmailAndPassword(auth, emailvar.current.value, passvar.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrmsg(errorCode+""+errorMessage)
  });
      }
      else{
createUserWithEmailAndPassword(auth,emailvar.current.value, passvar.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
        displayName: uservar.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(adduser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        // ...
      
      
        // Profile updated!
        // ...
      
      }).catch((error) => {
        // An error occurred
        // ...
        seterrmsg(error.message)
      });
      
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   seterrmsg(errorCode+""+errorMessage)
    // ..
  });
      }
    }
    return(
<div>
   <Header/> 
   <div className="absolute">
    <img className="h-screen object-cover"src={BG_URL} alt="back"/>
   </div>
   <form onSubmit={(e)=>e.preventDefault()} className="w-full md:w-3/12 absolute p-12 bg-black right-0 left-0 mx-auto my-36 text-white rounded-lg bg-opacity-80">
    <h1 className="font-bold text-3xl py-4">{isSignin?"Sign in":"Sign up"}</h1>
    <input  ref={emailvar} type="text" placeholder="Enter email" className="p-4 my-4 w-full bg-gray-700"/>

    {!isSignin&&<><input ref={uservar} type="text" placeholder="Enter Username" className="p-4 my-4 w-full bg-gray-700" />
    </>
    }
    <input ref={passvar} type="password" placeholder="Enter Password" className="p-4 my-4 w-full bg-gray-700"/>
    <p className="text-red-500 font-bold text-lg py-2">{errmsg}</p>
    <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handlevalidation}>{isSignin?"Sign in":"Sign up"}</button>
    <p className="py-4 cursor-pointer" onClick={handlesignup}>{isSignin?"New to Netflix?Sign up Now":"Already Sign in"}</p>
   </form>
</div>
    )
}
export default Login;