import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const Secondarycontainer=()=>{
    const movies=useSelector((store)=>store.movies)
    
    return (movies.nowPlayingMovies && (
    <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <Movielist title={"now playing"} movies={movies.nowPlayingMovies}/>
        <Movielist title={"Popular movies"} movies={movies.popularmovies} />
        <Movielist title={"Popular movies"} movies={movies.popularmovies} />
        <Movielist title={"Popular movies"} movies={movies.popularmovies} />
        <Movielist title={"Toprated Movies"} movies={movies.toprated}/>
</div>

    </div>))
}
export default Secondarycontainer;