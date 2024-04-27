import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGO, UserIcon } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adduser,removeuser } from "../utils/UserSlice";
import { useNavigate } from "react-router-dom";
const Header=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(store=>store.user)
    const handlesignout=()=>{
        signOut(auth).then(()=>{}).catch((error)=>{});
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
<div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img className="w-44 h-17"src={LOGO}
    alt="netflix" />
    {user &&<div className="flex p-2">
    <img className="w-12 h-12 " alt="usericon" src={UserIcon}/>
    <button onClick={handlesignout}className="text-white font-bold">Sign out</button>
    </div>}
</div>
    )
}
export default Header;