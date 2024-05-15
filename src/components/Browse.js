import { useSelector } from "react-redux";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowplayingMovies";
import Maincontainer from "./Mainconatiner";
import Secondarycontainer from "./Secondarycontainer";
import usePopularmovies from "../hooks/usePopularmovies";
import GPTsearch from "./GPTsearch";

const Browse=()=>{
    const showgpt=useSelector((store)=>store.gpt.showgpt)
   useNowPlayingMovies();
   usePopularmovies();
    return (
        <div>    
         <Header/>
         {showgpt?
         <GPTsearch/>:<>
            <Maincontainer/>   
        <Secondarycontainer/></>}
        
        </div>
    )
}
export default Browse;