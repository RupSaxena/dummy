import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";
import {addTrailerVideo} from "../utils/movieSlice";
const useTrailer=(movieId)=>{
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
        const dispatch=useDispatch();
        const getMovievideos=async()=>{
            const data=await 
            fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)
        const jsondata=await data.json();
    
        const filterdata=jsondata?.results?.filter((v)=>v.type==="Trailer")
    const trailer=filterdata.length?filterdata[0]:jsondata.results[0];    
    dispatch(addTrailerVideo(trailer))
    }
    useEffect(()=>{
        !trailerVideo && getMovievideos()},[])
}
export default useTrailer;