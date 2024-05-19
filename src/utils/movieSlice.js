import { createSlice } from "@reduxjs/toolkit";
const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularmovies:null,
        toprated:null,
    
        movieInfo:null,
        cast:null ,
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
        },addToprated:(state,action)=>{
state.toprated=action.payload;
        },
      
            addMovieInfo:(state,action)=>{
      state.movieInfo = action.payload;
    },
    addMovieCast: (state, action) => {
        state.cast = action.payload;
      }
    }
});
export const{ addNowPlayingMovies ,addMovieCast,addMovieInfo,addTrailerVideo,addPopularmovies,addToprated}=moviesSlice.actions;
export default moviesSlice.reducer;