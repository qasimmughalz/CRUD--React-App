import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie:{},
}

const MovieSLice = createSlice({
    name:"movie",
    initialState, 
    reducers:{
       
        addMovies: (state , action )=> {
           
            state.movie = action.payload
        }

    
    }
})



export const {addMovies } = MovieSLice.actions;

export default MovieSLice.reducer