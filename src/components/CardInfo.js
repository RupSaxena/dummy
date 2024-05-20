
import { useParams } from "react-router-dom";
import useMovieInfo from "../hooks/useMovieInfo";
import { useSelector } from "react-redux";
import useMovieCast from "../hooks/useMovieCast";
import Header from "./Header";
import { IMG_CDN } from "../utils/Constants";
import CardTopInfo from "./CardTopInfo";
import CastCard from "./CastCard";

const CardInfo=()=>{
    const { id }=useParams();
  

    useMovieInfo(id);
    const info=useSelector(store=>store.movies.movieInfo)
useMovieCast(id);
const movieCast=useSelector((store)=>store.movies.cast);
    return (
    <div className="relative w-full">
      
    <Header/>
    <div className="h-[100vh] w-[100%] absolute top-0 -z-10 overflow-hidden bg-black">
      <img
        className="h-screen w-12/12 mx-auto brightness-[.4] scale-125  xl:scale-105"
        alt="moviedInside-Img-bg"
      
        src={
          IMG_CDN +
          (info?.backdrop_path)
        }
      />
    </div>
    <CardTopInfo info={info} />
   
<div className="h-full bg-black">
    <h1 className="text-white pt-12 mx-12 my-12 text-2xl">Cast and Crew</h1>
    <div className="flex overflow-x-hidden my-6 mx-10 ">
      <div className="flex flex-wrap gap-2 ">
        {movieCast?.map((cast)=>(
          <CastCard key={cast.id} profile_path={cast.profile_path} name={cast.name}/>
        ))}
      </div>
        </div>
        
       
    
     
    </div>
  

  </div>
    )
}
export default CardInfo;