import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const GPTmoviesuggestions=()=>{
    const {movieResults,movieNames}=useSelector((store)=>store.gpt);
    if(!movieNames) return null;
    return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-90">
            <h1>{movieNames[0]}</h1>
            {movieNames.map((movieName,index)=>
<Movielist key={movieName} title={movieName} movies={movieResults[index]}/>)}
        </div>
    )
}
export default GPTmoviesuggestions;