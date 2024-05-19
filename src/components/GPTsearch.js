import { BG_URL } from "../utils/Constants";
import GPTmoviesuggestion from "./GPTmoviesuggestion";
import GPTsearchbar from "./GPTsearchbar";
import { useSelector } from "react-redux";
const GPTsearch=()=>{

    return(<>
        <div className="fixed -z-10 h-full w-full">
        <img className="md:h-[600px] sm:h-[600px] lg:h-[800px] h-screen w-full object-cover" src={BG_URL} alt="back"/>
        </div>
        <div>
      <GPTsearchbar/>
   
   
      <GPTmoviesuggestion/>
      </div>
    </>)
}
export default GPTsearch;