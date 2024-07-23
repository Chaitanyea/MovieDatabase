import React from 'react';
import './movie.scss'

const MovieCard = (props) => {
    const {data} = props;

    return (
        <div className='card'>
            <div className='card-border'>
                <div className='card-top'>
                    <h2>
                        {data.Title}
                        <h4>{data.Year}</h4>
                    </h2>
                    <img src={data.Poster} alt={data.Title} className='image'></img>
                </div>
                <div className='card-bottom'>
                </div>
            </div>
            
        </div>
    );
};

export default MovieCard;