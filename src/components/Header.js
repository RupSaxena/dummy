import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGO, SUPPORTED_LANGUAGE, UserIcon } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adduser,removeuser } from "../utils/UserSlice";
import { useNavigate } from "react-router-dom";
import { togglegptsearch } from "../utils/gptslice";
import { changelanguage } from "../utils/configslice";
const Header=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(store=>store.user)
    const showgpt=useSelector(store=>store.gpt.showgpt)
    const handlesignout=()=>{
        signOut(auth).then(()=>{}).catch((error)=>{});
    }
    const handleGPTsearch=()=>{
      dispatch(togglegptsearch())
    }
    const handlelanguage=(e)=>{
      dispatch(changelanguage(e.target.value))
    }
    useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName,photoURL} = user;
              dispatch(adduser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
              // ...
              navigate("/browse");
            } else {
              // User is signed out
              // ...
              navigate("/");
              dispatch(removeuser())
    
            }
          });
          return()=>unsubscribe();
    },[])
    return (
<div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
 
    <img className="w-44 mx-auto md:mx-0"src={LOGO}
    alt="netflix" />
    {user &&<div className="flex p-2 justify-between">
      {showgpt&&<select className="p-2 m-2 bg-gray-900 text-white" onChange={handlelanguage}>
        {SUPPORTED_LANGUAGE.map(lang=>
          <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
        )} 
      </select>}
    <button className="py-2 px-4 my-2 mx-4 bg-purple-800 text-white rounded-lg"onClick={handleGPTsearch}>{showgpt?"Homepage":"GPT search"} </button>
    <img className="w-12 h-12 hidden md:block" alt="usericon" src={UserIcon}/>
    <button onClick={handlesignout}className="text-white font-bold">Sign out</button>
    </div>}
</div>
    )
}
export default Header;