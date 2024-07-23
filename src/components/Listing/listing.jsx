import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../redux/movieSlice.jsx';
import MovieCard from './movie.jsx'
import './listing.scss'

const listing = () => {

    const movies = useSelector(getAllMovies)
    let render = movies.Response === "True" ? (
        movies.Search.map((movie, index) => {
            return <MovieCard key = {index} data = {movie}></MovieCard>
        })
    ) : (
        <div className='movie-error'>
            <h3>
                {movies.Error}
            </h3>
        </div>
    );

    return (
        <div className='movie-outer'>
            <div className='list'>
                <div className='movie-container'>
                    {render}
                </div>
            </div>
        </div>
    )
};

export default listing;