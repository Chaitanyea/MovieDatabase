import React, { useEffect } from 'react'
import {useParams} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import { fetchAsyncMovieDetails, getMovieDetails } from '../../redux/movieSlice';
import './detail.scss'
const detail = () => {
    const {imdbID} = useParams();
    const dispatch = useDispatch();

    const data = useSelector(getMovieDetails)
    useEffect(() => {
        dispatch(fetchAsyncMovieDetails(imdbID))
    }, [dispatch, imdbID]); 
    return (
        <div className='movie-detail'>
            <div className='left'>
                <div className='title'>
                    {data.Title}
                </div>
                <div className='rating-and-details'>
                    <span>
                        Year <i className='fa fa-calendar'></i> : {data.Year}
                    </span>
                    <span>
                        IMDB rating <i className='fa fa-star'></i> : {data.imdbRating}
                    </span>
                    <span>
                        IMDB votes <i className='fa fa-thumbs-up'></i> : {data.Votes}
                    </span>
                    <span>
                        Runtime <i className='fa fa-film'></i> : {data.Runtime}
                    </span>
                </div>
                <div className='plot'>
                    {data.Plot}
                </div>
                <div className='info'>
                    <div>
                        <span>
                        Director
                    </span>
                    <span>
                        {data.Director}
                    </span>
                    </div>
                    <div>
                        <span>
                        Starring
                    </span>
                    <span>
                        {data.Actors}
                    </span>
                    </div>
                    <div>
                        <span>
                        Genre
                    </span>
                    <span>
                        {data.Genre}
                    </span>
                    </div>
                    <div>
                        <span>
                        Awards
                    </span>
                    <span>
                        {data.Awards}
                    </span>
                    </div>
                </div>
            </div>
            <div className='right'>
                <img src = {data.Poster} alt={data.Title}>
                </img>
            </div>
        </div>
    )
} 

export default detail