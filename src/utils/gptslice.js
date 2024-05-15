import { createSlice } from "@reduxjs/toolkit";
const gptslice=createSlice({
    name:"gpt",
    initialState:{
        showgpt:false,GPTmovies:null,
        movieNames:null,movieResults:null
    },
    reducers:{
        togglegptsearch:(state,action)=>{
state.showgpt=!state.showgpt;
        },addGPTmovie:(state,action)=>{
            const {movieNames,movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        }
    }
})
export const {togglegptsearch,addGPTmovie} =gptslice.actions;
export default gptslice.reducer;