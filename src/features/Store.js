import { configureStore } from "@reduxjs/toolkit";
import { addMovies } from "./MoviesSlice";

const Store = configureStore({
    reducer:{
        movies: addMovies
    }
})


export default Store                      
                          
