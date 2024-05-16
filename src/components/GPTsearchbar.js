import { useRef } from "react";
import { lang } from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, Gemini_KEY } from "../utils/Constants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addGPTmovie } from "../utils/gptslice";
const GPTsearchbar=()=>{
    const dispatch=useDispatch();
    const genAI=new GoogleGenerativeAI(Gemini_KEY);

    
    const searchtext=useRef(null);
    const searchMovieTMDB=async(movie)=>{
        const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
        const json=await data.json();
        return json.results;


    }
    const handlegptsearchclick=async()=>{
        const gptQuery="Act as a Movie Recommendation system and suggest some movies for the query:"+searchtext.current.value+".only give me names of 10 movies ,comma separated like the example result given ahead.Example Result:Gadar,Sholay,Golmal"
        const model=genAI.getGenerativeModel({model:"gemini-pro"});
        const gptResults= await model.generateContent(gptQuery);
            const response= gptResults.response;
            const text=response.text();
        
          
        const gptmovies=text.split(",");
        
        const promisedata=gptmovies.map(movie=>searchMovieTMDB(movie))
        const tmdbResults=await Promise.all(promisedata);
        console.log(tmdbResults);
        dispatch(addGPTmovie({movieNames:gptmovies,movieResults:tmdbResults}));
    }
    const langKey=useSelector((store)=>store.config.lang)
    return (<div className=" pt-[35%] md:pt-[10%] flex justify-center" onSubmit={(e)=>e.preventDefault()}>
        <form className=" w-full md:w-1/2 bg-black grid grid-cols-12">
            <input ref={searchtext}type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey].gptSearchplaceholder}/>
            <button className="py-2 m-4 px-4 bg-red-700 text-white rounded-lg col-span-3"onClick={handlegptsearchclick}>
            {lang[langKey].search}</button>
        </form>
    </div>)
}
export default GPTsearchbar;