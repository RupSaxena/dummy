import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import movieSlice from "./movieSlice";
import gptslice from "./gptslice";
import configslice from "./configslice";
const appStore=configureStore({
    reducer:{
user:UserSlice,
movies:movieSlice,
gpt:gptslice,
config:configslice
    }
}
)
export default appStore;