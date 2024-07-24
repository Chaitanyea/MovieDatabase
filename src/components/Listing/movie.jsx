import React from 'react';
import './movie.scss'
import {Link} from 'react-router-dom'

const MovieCard = (props) => {
    const {data} = props;

    return (
        <div className='card'>
            <Link to = {`movie/${data.imdbID}`}>
            <div className='card-border'>
                <div className='card-top'>
                    <img src={data.Poster} alt={data.Title} className='image'></img>
                </div>
                <div className='card-bottom'>
                    <div className='data'>
                        <h2>
                        {data.Title}
                        </h2>
                        <h4>{data.Year}</h4>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default MovieCard;