import { useDispatch ,useSelector} from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { addPopularmovies } from "../utils/movieSlice";
const usePopularmovies=()=>{
    const dispatch=useDispatch();
    const popularmovies = useSelector(
        (store) => store.movies.popularmovies
      );
    const getPopularmovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS)
          const jsondata = await data.json();
           
          dispatch(addPopularmovies(jsondata.results))
    }
    useEffect(()=>{!popularmovies && getPopularmovies();},[])
}
export default usePopularmovies;
