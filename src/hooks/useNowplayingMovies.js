import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    const getPlayingmovies=async()=>{
        const data=await 
        fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
          const jsondata = await data.json();
           console.log(jsondata)
          dispatch(addNowPlayingMovies(jsondata.results))
    }
    useEffect(()=>{getPlayingmovies();},[])
}
export default useNowPlayingMovies;