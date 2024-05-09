
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowplayingMovies";
import Maincontainer from "./Mainconatiner";

const Browse=()=>{
   useNowPlayingMovies();
    return (
        <div>
            <Header/>
            <Maincontainer/>
        </div>
    )
}
export default Browse;