import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import '../common/apis/apiKey'
import '../common/apis/movieApi'
import movieApi from "../common/apis/movieApi";
import { apiKey } from "../common/apis/apiKey";

const initialState = {
    movies:[],
    details:{}
}

export const fetchAsyncMovieDetails = createAsyncThunk(
    'movies/fetchAsyncMovieDetails',
    async (id) => {
        const response = await movieApi.get(
            `?apiKey=${apiKey}&i=${id}`
        )
        return response.data
    }
)

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovie:(state, {payload}) => {
            state.movies = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncMovieDetails.fulfilled, (state, { payload }) => {
            console.log("Fetched movie details");
            return { ...state, details: payload };
        });
    },
});

export const {addMovie} = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getMovieDetails = (state) => state.movies.details
export default movieSlice.reducer;
