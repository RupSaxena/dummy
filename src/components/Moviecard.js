import { IMG_CDN } from "../utils/Constants";

const Moviecard=({posterPath})=>{
    if (!posterPath) return null;
    return(
        <div className="w-36 md:w-48 pr-4 cursor-pointer ">
            <img alt="image2" src={IMG_CDN +posterPath} />
        </div>
    )
}
export default Moviecard;