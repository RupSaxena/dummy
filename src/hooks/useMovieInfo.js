import { useDispatch } from "react-redux"
import { addMovieInfo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
const useMovieInfo=(id)=>{
    const dispatch=useDispatch();
const fetchdata=async()=>{
    
    const data=await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "?language=en-US",
        API_OPTIONS
    )
    const jsondata=await data.json(data);
    dispatch(addMovieInfo(jsondata))
    console.log(jsondata)
}
useEffect(() => {
    fetchdata();
  }, []);
}
export default useMovieInfo;