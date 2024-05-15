import { BG_URL } from "../utils/Constants";
import GPTmoviesuggestion from "./GPTmoviesuggestion";
import GPTsearchbar from "./GPTsearchbar";

const GPTsearch=()=>{
    return(<>
        <div className="fixed -z-10">
        <img className="h-screen object-cover" src={BG_URL} alt="back"/>
        </div>
        <div>
      <GPTsearchbar/>
      <GPTmoviesuggestion/>
      </div>
    </>)
}
export default GPTsearch;