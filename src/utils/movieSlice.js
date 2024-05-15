import { createSlice } from "@reduxjs/toolkit";
const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularmovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
state.trailerVideo=action.payload;
        },
        addPopularmovies:(state,action)=>{
            state.popularmovies=action.payload;
        }
    }
});
export const{ addNowPlayingMovies , addTrailerVideo,addPopularmovies}=moviesSlice.actions;
export default moviesSlice.reducer;