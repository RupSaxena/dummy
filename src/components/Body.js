import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { adduser, removeuser } from "../utils/UserSlice";
const Body=()=>{
    const dispatch=useDispatch();
const approuter=createBrowserRouter([{
    path:"/",
    element:<Login/>
},
{
    path:"/browse",
    element:<Browse/>
}
])

    return (
        <div>
            <RouterProvider router={approuter}/>
        </div>
    )
}
export default Body;