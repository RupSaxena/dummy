import { useDispatch, useSelector } from "react-redux";
import { addToprated } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
const useToprated=()=>{
    const dispatch=useDispatch();
    const toprated=useSelector(store=>store.movies.toprated)
    const getToprated=async()=>{
const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
const json=await data.json();

dispatch(addToprated(json.results))
}
useEffect(()=>{!toprated &&
    getToprated();
},[])
}
export default useToprated;