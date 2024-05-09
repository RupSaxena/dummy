import { useSelector } from "react-redux";
import Videotitle from "./Videotitle";
import Videobackground from "./Videobackground";

const Maincontainer=()=>{
  
  const movies=useSelector((store)=>store.movies?.nowPlayingMovies)
if(!movies) return;
  const main=movies[0];
  const {original_title,overview,id}=main;
return( <div className="pt-[30%] bg-black md:pt-0">
    <Videotitle title={original_title}overview={overview}/>
    <Videobackground movieId={id}/>
</div>)
}
export default Maincontainer;