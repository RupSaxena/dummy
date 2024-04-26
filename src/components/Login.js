import { validate1, validate2 } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
const Login=()=>{
    const[isSignin,setisSignin]=useState(true);
    const [errmsg,seterrmsg]=useState(null)
    const emailvar=useRef(null);
    const uservar=useRef(null);
    const passvar=useRef(null);
    const handlesignup=()=>{
setisSignin(!isSignin);
    }
    const handlevalidation=()=>{
if(isSignin){
      const message=validate1(emailvar.current.value,passvar.current.value);
      
      console.log(message)
      seterrmsg(message);
      }
      else{
        const message=validate2(emailvar.current.value,passvar.current.value,uservar.current.value);
        seterrmsg(message);

      }
    }
    return(
<div>
   <Header/> 
   <div className="absolute">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="back"/>
   </div>
   <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black right-0 left-0 mx-auto my-36 text-white rounded-lg bg-opacity-80">
    <h1 className="font-bold text-3xl py-4">{isSignin?"Sign in":"Sign up"}</h1>
    <input  ref={emailvar} type="text" placeholder="Enter email" className="p-2 my-4 w-full bg-gray-700"/>

    {!isSignin&&<><input ref={uservar} type="text" placeholder="Enter Username" className="p-2 my-4 w-full bg-gray-700" />
    </>
    }
    <input  ref={passvar} type="password" placeholder="Enter Password" className="p-2 my-4 w-full bg-gray-700"/>
    <p className="text-red-700 font-bold text-lg py-2">{errmsg}</p>
    <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handlevalidation}>{isSignin?"Sign in":"Sign up"}</button>
    <p className="py-4 cursor-pointer" onClick={handlesignup}>{isSignin?"New to Netflix?Sign up Now":"Already Sign in"}</p>
   </form>
</div>
    )
}
export default Login;